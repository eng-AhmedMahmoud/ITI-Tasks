const Ajv = require("ajv");
const ajv = new Ajv();
const validation = require("../validations/customer");

const createValidation = (req, res, next) => {
    const body = req.body;
    const valid = ajv.validate(validation.createCustomerSchema, body);

    if (!valid) {
        return res.status(400).json({ message: "Invalid request body" });
    }

    next();
}

module.exports = {
    createValidation
}