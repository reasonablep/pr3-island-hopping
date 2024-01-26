const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Island {
    _id: ID
    islandName: String
    islandDescription: String
    location: String
    price: Float
    quantity: Int
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    islands: [Island]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input IslandInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    price: Float
    quantity: Int
  }

  type Query {
    categories: [Category]
    islands(category: ID, name: String): [Island]
    island(_id: ID!): Island
    user: User
    order(_id: ID!): Order
    checkout(islands: [IslandInput]): Checkout
  }


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(islands: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateIsland(_id: ID!, quantity: Int!): Island
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
