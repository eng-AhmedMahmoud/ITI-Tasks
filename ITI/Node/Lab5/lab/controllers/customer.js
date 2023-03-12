const Customer = require("../models/customer");

const getAll = async (req, res) => {
    try {
        const allCustomers = await Customer.find({});
        res.status(200).json(allCustomers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving customers", error });
    }
};

const create = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(500).json({ message: "Error creating customer", error });
    }
};

const getOne = async (req, res) => {
    const { id } = req.params;

    try {
        const customer = await Customer.findById(id);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving customer", error });
    }
};

const updateOne = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const customer = await Customer.findByIdAndUpdate(id, updates, {
            new: true,
        });

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer updated", customer });
    } catch (error) {
        res.status(500).json({ message: "Error updating customer", error });
    }
};

const deleteOne = async (req, res) => {
    const { id } = req.params;

    try {
        const customer = await Customer.findByIdAndDelete(id);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(202).json({ message: "Customer deleted", customer });
    } catch (error) {
        res.status(500).json({ message: "Error deleting customer", error });
    }
};

module.exports = { getAll, create, getOne, deleteOne, updateOne };
