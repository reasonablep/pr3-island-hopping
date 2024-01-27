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
      islandName: 'Tin of Cookies',
      islandDescription:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      location: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Canned Coffee',
      islandDescription:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      location: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1000000,
      quantity: 1
    },
    {
     islandName: 'Toilet Paper',
      category: categories[1]._id,
      islandDescription:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      location: 'toilet-paper.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Handmade Soap',
      category: categories[1]._id,
      islandDescription:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      location: 'soap.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Set of Wooden Spoons',
      category: categories[1]._id,
      islandDescription:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      location: 'wooden-spoons.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Camera',
      category: categories[2]._id,
      islandDescription:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      location: 'camera.jpg',
      price: 1000000,
      quantity: 30
    },
    {
      islandName: 'Tablet',
      category: categories[2]._id,
      islandDescription:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      location: 'tablet.jpg',
      price: 1000000,
      quantity: 30
    },
    {
      islandName: 'Tales at Bedtime',
      category: categories[3]._id,
      islandDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      location: 'bedtime-book.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Spinning Top',
      category: categories[4]._id,
      islandDescription: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      location: 'spinning-top.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Set of Plastic Horses',
      category: categories[4]._id,
      islandDescription:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      location: 'plastic-horses.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Teddy Bear',
      category: categories[4]._id,
      islandDescription:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      location: 'teddy-bear.jpg',
      price: 1000000,
      quantity: 1
    },
    {
      islandName: 'Alphabet Blocks',
      category: categories[4]._id,
      islandDescription:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      location: 'alphabet-blocks.jpg',
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
