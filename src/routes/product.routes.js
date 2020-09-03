module.exports = app => {
    const product=require('../controller/product/products.controller')

    var router = require("express").Router();

    router.get("/", product.productList);

    router.post("/", product.addNewProduct);

    router.put("/:id", product.updateProduct);

    router.get('/counts',product.productCount);

    router.get('/:id',product.getProductById);

    router.delete('/:id',product.deleteProduct);

    app.use('/api/products', router);
}