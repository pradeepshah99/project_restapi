// var express = require('express');
var services = require('../controllers/product_services')
    // var router = express.Router();

module.exports = (router) => {

    router.post('/product', function(req, res) {
        services.create_product(req, res);
    })


    router.put('/product/update/:id', function(req, res) {
        services.update_product(req, res);
    })

    router.delete('/product/:id', function(req, res) {
        services.delete_product(req, res);
    })


    router.get('/product/:id', function(req, res) {
        services.show_user_products(req, res);
    })
}

// module.exports = router;