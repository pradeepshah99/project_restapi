var express = require('express');
var services = require('../controllers/login_services')
var router = express.Router();
var jwt = require('jsonwebtoken')

const conn = require('../config/config.json');


router.post('/login', (req, res) => {

    if (req.headers.authorization) {
        services.log_in(req, res, req.headers.authorization);
    } else {
        services.tokeninn(req, res)
    }

})


module.exports = router;