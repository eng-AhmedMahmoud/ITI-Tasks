const createProductSchema = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 1 },
        price: { type: "number", minimum: 0 },
        quantity: { type: "number", minimum: 0 },
        description: { type: "string" }
    },
    required: ["name", "price", "quantity"]
};


module.exports = { createProductSchema }