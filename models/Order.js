var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
        id: String,
        name: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String,
        shipped: Boolean,
        Cart: Array,
});

module.exports = mongoose.model('Order', OrderSchema);
