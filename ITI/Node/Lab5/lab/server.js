const express = require('express');
const app = express()
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const ProductRouter = require("./routes/product")
const CustomerRouter = require("./routes/customer")

mongoose.connect('mongodb://127.0.0.1:27017/kareem', {
    useNewUrlParser: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/products" , ProductRouter)
app.use("/api/customers" , CustomerRouter)

app.listen(process.env.PORT || 7000, () => console.log('http://127.0.0.1:7000/'))

// app listen in port 7000 in nodejs?