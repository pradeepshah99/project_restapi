var express = require('express')
var auth = require('../controllers/auth')
var router = express.Router();
var jwt = require('jsonwebtoken')
const conn = require('../config/config.json');






router

    .route('/auth/register')
    .post(auth.register);


router
    .route('/auth/login')
    .post(auth.tokeninn);

require('./user')(router)

const checkAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        res.send('unauthorized user')
    } else {
        jwt.verify(req.headers.authorization, conn[1].key, function(err, decoded) {
            if (!err) {

                next();
            } else {
                res.send('unauthorized access');
            }
        })
    }
}

router.use(checkAuth)


require('./product')(router)

require('./review')(router)

router.all('*', function(req, res) {
    res.send("invalid url " + String(req.url));
})


module.exports = router;