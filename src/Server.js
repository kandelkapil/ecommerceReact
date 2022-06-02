const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');
const cors = require("cors");


const app = express();
app.use(bodyParser.json());
app.use(cors())


const port = process.env.PORT || 5000;

mongoose.connect(
    "mongodb+srv://Test:test%40123@ecommerce.ni33rmt.mongodb.net/?retryWrites=true&w=majority"
    , () => console.log('connected to database')
)

const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String],
    })
);

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}
)

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete("/api/products/:id", async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deleteProduct)
})

const Order = mongoose.model('Order', new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    email: String,
    name: String,
    address: String,
    total: Number,
    cartItems: [{

        _id: String,
        title: String,
        price: Number,
        count: Number
    }]

}
    , {
        timestamps: true,
    }
))

app.post('/api/orders', async (req, res) => {
    if (!req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.cartItems ||
        !req.body.total) {
        return res.send({ message: 'Data is Required' })
    }

    const order = await Order(req.body).save();
    res.send(order)
})




app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});