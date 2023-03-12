const mongoose = require('mongoose');
const { productsModel } = require('../utils/string_constants');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, minimum: 1 },
    quantity: { type: Number, required: true, default: 0, minimum: 0 },
    description: { type: String, required: false },
});

module.exports = mongoose.model(productsModel, productSchema);

