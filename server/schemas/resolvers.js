const { User, Island, Category, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    islands: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Island.find(params).populate('category');
    },
    island: async (parent, { _id }) => {
      return await Island.findById(_id).populate('category');
    },

    // Populate category for order-related information
    // Sort orders by purchase date

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.islands',
          populate: 'category',
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw AuthenticationError;
    },



    order: async (parent, { _id }, context) => {
      // if (context.user) {
      //   const user = await User.findById(context.user._id).populate({
      //     path: 'orders.islands',
      //     populate: 'category',
      //   });

      //   return user.orders.id(_id);
      // }

      // throw AuthenticationError;
      console.log(_id)
      const order = await Order.findOne({_id: _id});
      return order
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      // We map through the list of islands sent by the client to extract the _id of each item and create a new Order.
      await Order.create({ islands: args.islands.map(({ _id }) => _id) });
      const line_items = [];

      for (const island of args.islands) {
        line_items.push({
          price_data: {
            currency: 'usd',
            island_data: {
              name: island.name,
              description: island.description,
              images: [`${url}/images/${island.image}`],
            },
            unit_amount: island.price * 100,
          },
          quantity: island.purchaseQuantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { islands }, context) => {
      if (context.user) {
        const order = new Order({ islands });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },

    // Update quantity of available instances of an island from '1' to '0'

    updateIsland: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Island.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
