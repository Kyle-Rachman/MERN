const Product = require('../models/product.model');

// Create Commands for Product

const createProduct = (req, res) => {
    Product.exists({
        title: req.body.title
    })
    .then( productExists => {
        if (productExists) {
            return Promise.reject('This product already exists!')
        }
        return Product.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.json(err));
};

// Read Commands for Product

const findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => res.json(err));
};

const findProduct = (req, res) => {
    Product.exists({ _id: req.params.id })
    .then( productExists => {
        if (productExists) {
            return Product.findOne({ _id: req.params.id })
        }
        return Promise.reject('This product does not exist!');
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.json(err));
};

// Update Commands for Product

const updateExistingProduct = (req, res) => {
    Product.exists({ _id: req.params.id })
    .then( productExists => {
        if (productExists) {
            return Product.findOneAndUpdate({ _id: req.params.id },
                req.body, { new: true, runValidators: true }
                )
        }
        return Promise.reject('This product does not exist!');
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.json(err));
};

// Delete Commands for Product

const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => {
            req.json(result)
        })
        .catch((err) => res.json(err));
};

module.exports = {
    createProduct,
    findAllProducts,
    findProduct,
    updateExistingProduct,
    deleteProduct
}