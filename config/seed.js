require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Renaissance', sortOrder: 10},
    {name: 'Roman Statues', sortOrder: 20},
    {name: 'Abstract', sortOrder: 30},
    {name: 'Nature', sortOrder: 40},
    {name: 'Portraits', sortOrder: 50},
    {name: 'Figures', sortOrder: 60},
    {name: 'Anime', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'A Mothers Love', category: categories[0], price: 555.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Davinci', category: categories[0], price: 666.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Nero', category: categories[0], price: 395.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 154.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 133.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 325.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Taco', emoji: '🌮', category: categories[2], price: 331.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Burrito', emoji: '🌯', category: categories[2], price: 445.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 223.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 711.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 100.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 212.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 300.95, imageUrl: 'https://i.imgur.com/jc1fLf6.jpg'},
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