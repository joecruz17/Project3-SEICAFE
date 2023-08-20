require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Renaissance', sortOrder: 10}, //0
    {name: 'Roman Statues', sortOrder: 20}, //1
    {name: 'Abstract', sortOrder: 30}, //2
    {name: 'Nature', sortOrder: 40}, //3
    {name: 'Portraits', sortOrder: 50}, //4
    {name: 'Figures', sortOrder: 60}, //5
    {name: 'Anime', sortOrder: 70}, //6
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'A Mothers Love', category: categories[0], price: 555.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Mona Lisa', category: categories[0], price: 666.95, imageUrl: 'https://i.imgur.com/MJ2SlI8.jpg'},
    {name: 'Storm of Olympus', category: categories[0], price: 395.95, imageUrl: 'https://i.imgur.com/ZuEyqcy.jpg'},
    {name: 'Aries', emoji: '🦀', category: categories[1], price: 154.95, imageUrl: 'https://i.imgur.com/3LuOIBA.jpg'},
    {name: 'Icarus', emoji: '🍤', category: categories[1], price: 133.95, imageUrl: 'https://i.imgur.com/VK6QRoV.jpg'},
    {name: 'Athena', emoji: '🦞', category: categories[1], price: 325.95, imageUrl: 'https://i.imgur.com/tnRZZuV.jpg'},
    {name: 'A Black Hole', emoji: '🌮', category: categories[2], price: 331.95, imageUrl: 'https://i.imgur.com/nI0HzWA.jpg'},
    {name: 'Soap Rose', emoji: '🌯', category: categories[2], price: 445.95, imageUrl: 'https://i.imgur.com/RNSy5WA.jpg'},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 223.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 711.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 100.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'The Queen', emoji: '🍟', category: categories[4], price: 212.95, imageUrl: 'https://i.imgur.com/V5vhUe4.jpg'},
    {name: 'Shades of Color', emoji: '🥗', category: categories[4], price: 300.95, imageUrl: 'https://i.imgur.com/8rL59Mo.jpg'},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 112.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 110.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 232.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 344.95},
    {name: 'Sasuke', emoji: '🥛', category: categories[6], price: 130.95, imageUrl: 'https://i.imgur.com/0vZrvRu.jpg'},
    {name: 'Ichigo', emoji: '☕', category: categories[6], price: 110.95, imageUrl: 'https://i.imgur.com/41Uo528.jpg'},
    {name: 'Eren', emoji: '🍹', category: categories[6], price: 558.95, imageUrl: 'https://i.imgur.com/tqaTn6O.jpg'},
    {name: 'Naruto', emoji: '🍺', category: categories[6], price: 553.95, imageUrl: 'https://i.imgur.com/ISSpFbU.jpg'},
    {name: 'Luffy', emoji: '🍷', category: categories[6], price: 734.95, imageUrl: 'https://i.imgur.com/7ejhlkF.jpg'},
  ]);

  console.log(items)

  process.exit();

})();