const Product = require('../models/product.model');

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
};

module.exports.getAllProducts = (req,res) => {
    Product.find({})
        .then((allProducts)=> { 
            console.log(allProducts)
            res.json(allProducts)
        })
        .catch((err) => console.log(err))
};

module.exports.getOneProduct = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            console.log(oneProduct)
            res.json(oneProduct)
        })
}