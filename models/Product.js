var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
        id: String,
        name: String,
        category: String,
        description: String,
        price: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
