// const db = require('./connection');
// const { User, Island, Category } = require('../models');
// const cleanDB = require('./cleanDB');

// db.once('open', async () => {
//   await cleanDB('Category', 'categories');
//   await cleanDB('Island', 'islands');
//   await cleanDB('User', 'users');

//   const categories = await Category.insertMany([
//     { name: 'Tropical' },
//     { name: 'Hunting' },
//     { name: 'Cold-Weather' },
//     { name: 'Isolated' },
//     { name: 'Oversized' }
//   ]);

//   console.log('categories seeded');

//   const islands = await Island.insertMany([
//       {
//     islandName: 'Tropical Paradise',
//     islandDescription:
//       'A breathtaking tropical paradise with pristine beaches and crystal-clear waters.',
//     location: 'tropical-paradise.jpg',
//     category: categories[0]._id,
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Serene Retreat',
//     islandDescription:
//       'An idyllic island retreat surrounded by lush greenery and a peaceful atmosphere.',
//     location: 'serene-retreat.jpg',
//     category: categories[0]._id,
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Private Oasis',
//     islandDescription:
//       'Escape to your own private oasis with stunning views and exclusive amenities.',
//     location: 'private-oasis.jpg',
//     category: categories[1]._id,
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Exotic Haven',
//     islandDescription:
//       'Discover an exotic haven featuring unique landscapes and cultural richness.',
//     location: 'exotic-haven.jpg',
//     category: categories[1]._id,
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Island Retreat',
//     islandDescription:
//       'Experience a tranquil island retreat with beautiful sunsets and cozy accommodations.',
//     location: 'island-retreat.jpg',
//     category: categories[1]._id,
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Adventure Island',
//     category: categories[2]._id,
//     islandDescription:
//       'Embark on thrilling adventures with this island offering a variety of outdoor activities.',
//     location: 'adventure-island.jpg',
//     price: 1000000,
//     quantity: 30
//   },
//   {
//     islandName: 'Technology Hub',
//     category: categories[2]._id,
//     islandDescription:
//       'A futuristic island serving as a technology hub with state-of-the-art facilities.',
//     location: 'technology-hub.jpg',
//     price: 1000000,
//     quantity: 30
//   },
//   {
//     islandName: 'Storybook Cove',
//     category: categories[3]._id,
//     islandDescription:
//       'Immerse yourself in the charm of Storybook Cove, a whimsical and enchanting island.',
//     location: 'storybook-cove.jpg',
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Spin and Play Island',
//     category: categories[4]._id,
//     islandDescription: 'An island dedicated to fun and games, featuring spinning tops and more.',
//     location: 'spin-and-play-island.jpg',
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Plastic Horses Paradise',
//     category: categories[4]._id,
//     islandDescription:
//       'For the horse lovers, a paradise with a collection of plastic horses to enjoy.',
//     location: 'plastic-horses-paradise.jpg',
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Cuddly Cove',
//     category: categories[4]._id,
//     islandDescription:
//       'A warm and cuddly island retreat featuring teddy bears and cozy accommodations.',
//     location: 'cuddly-cove.jpg',
//     price: 1000000,
//     quantity: 1
//   },
//   {
//     islandName: 'Alphabet Archipelago',
//     category: categories[4]._id,
//     islandDescription:
//       'Explore the Alphabet Archipelago, an island chain with educational alphabet blocks.',
//     location: 'alphabet-archipelago.jpg',
//     price: 1000000,
//     quantity: 1
//   }
//   ]);

//   console.log('islands seeded');

//   await User.create({
//     firstName: 'Peter',
//     lastName: 'Martinez',
//     email: 'pmrtnz@me.com',
//     password: 'password12345',
//     orders: [
//       {
//         islands: [islands[0]._id, islands[0]._id, islands[1]._id]
//       }
//     ]
//   });

//   await User.create({
//     firstName: 'Jon',
//     lastName: 'Sargis',
//     email: 'jsargis@hotmail.com',
//     password: 'password12345'
//   });

//   console.log('users seeded');

//   process.exit();
// });

const db = require('./connection');
const { User, Island, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Island', 'islands');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Tropical' },
    { name: 'Hunting' },
    { name: 'Cold-Weather' },
    { name: 'Isolated' },
    { name: 'Oversized' }
  ]);

  console.log('categories seeded');

  const islands = await Island.insertMany([
      {
    islandName: 'Tropical Paradise',
    islandDescription:
      'A breathtaking tropical paradise with pristine beaches and crystal-clear waters.',
    location: 'tropical-paradise.jpg',
    category: categories[0]._id,
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Serene Retreat',
    islandDescription:
      'An idyllic island retreat surrounded by lush greenery and a peaceful atmosphere.',
    location: 'serene-retreat.jpg',
    category: categories[0]._id,
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Private Oasis',
    islandDescription:
      'Escape to your own private oasis with stunning views and exclusive amenities.',
    location: 'private-oasis.jpg',
    category: categories[1]._id,
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Exotic Haven',
    islandDescription:
      'Discover an exotic haven featuring unique landscapes and cultural richness.',
    location: 'exotic-haven.jpg',
    category: categories[1]._id,
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Island Retreat',
    islandDescription:
      'Experience a tranquil island retreat with beautiful sunsets and cozy accommodations.',
    location: 'island-retreat.jpg',
    category: categories[1]._id,
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Adventure Island',
    category: categories[2]._id,
    islandDescription:
      'Embark on thrilling adventures with this island offering a variety of outdoor activities.',
    location: 'adventure-island.jpg',
    price: 1000000,
    quantity: 30
  },
  {
    islandName: 'Technology Hub',
    category: categories[2]._id,
    islandDescription:
      'A futuristic island serving as a technology hub with state-of-the-art facilities.',
    location: 'technology-hub.jpg',
    price: 1000000,
    quantity: 30
  },
  {
    islandName: 'Storybook Cove',
    category: categories[3]._id,
    islandDescription:
      'Immerse yourself in the charm of Storybook Cove, a whimsical and enchanting island.',
    location: 'storybook-cove.jpg',
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Spin and Play Island',
    category: categories[4]._id,
    islandDescription: 'An island dedicated to fun and games, featuring spinning tops and more.',
    location: 'spin-and-play-island.jpg',
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Plastic Horses Paradise',
    category: categories[4]._id,
    islandDescription:
      'For the horse lovers, a paradise with a collection of plastic horses to enjoy.',
    location: 'plastic-horses-paradise.jpg',
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Cuddly Cove',
    category: categories[4]._id,
    islandDescription:
      'A warm and cuddly island retreat featuring teddy bears and cozy accommodations.',
    location: 'cuddly-cove.jpg',
    price: 1000000,
    quantity: 1
  },
  {
    islandName: 'Alphabet Archipelago',
    category: categories[4]._id,
    islandDescription:
      'Explore the Alphabet Archipelago, an island chain with educational alphabet blocks.',
    location: 'alphabet-archipelago.jpg',
    price: 1000000,
    quantity: 1
  }
  ]);

  console.log('islands seeded');

  await User.create({
    firstName: 'Peter',
    lastName: 'Martinez',
    email: 'pmrtnz@me.com',
    password: 'password12345',
    orders: [
      {
        islands: [islands[0]._id, islands[0]._id, islands[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jon',
    lastName: 'Sargis',
    email: 'jsargis@hotmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});