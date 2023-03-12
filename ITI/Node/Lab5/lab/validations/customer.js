const createCustomerSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        age: { type: "number", minimum: 18 },
        address: { type: "string" }
    },
    required: ["name", "age", "address"]
};

module.exports = { createCustomerSchema };
