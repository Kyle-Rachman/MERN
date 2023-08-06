const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findProduct);
    app.post('/api/products/new', ProductController.createProduct);
    app.patch('/api/products/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct)
};