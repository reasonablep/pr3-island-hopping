const db = require('./connection');
const { User, Island, Category } = require('../models');
const cleanDB = require('./cleanDB');
const islandsData = require('./islandsData');

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

  const islands = await Island.insertMany(islandsData.map((island) => ({
    islandName: island.islandName,
    islandDescription: island.islandDescription,
    location: island.location,
    category: categories[0]._id,
    price: island.price,
    quantity: 1, 
    image: island.image
  })));

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