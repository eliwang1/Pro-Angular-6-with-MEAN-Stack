var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
        id: String,
        lines: Array,
        itemCount: Number,
        cartPrice: Number,
});

module.exports = mongoose.model('Cart', CartSchema);
