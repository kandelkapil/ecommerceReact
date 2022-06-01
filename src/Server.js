const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

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

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});