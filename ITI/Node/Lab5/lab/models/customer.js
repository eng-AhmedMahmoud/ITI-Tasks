const mongoose = require('mongoose');
const { CustomersModel } = require('../utils/string_constants');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, minimum: 18 },
    address: { type: String, required: true },
});

module.exports = mongoose.model(CustomersModel, customerSchema);

