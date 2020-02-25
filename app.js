const bodyParser = require('body-parser');
const user = require('./controllers/user/user');
const login = require('./controllers/login/login');
const product = require('./controllers/products/product');
const review = require('./controllers/reviews/review');
module.exports = function(app) {



    app.use(bodyParser.text())

    app.use('/api/auth', user);

    app.use('/api/auth', login);

    const checkAuth = (req, res, next) => {
        console.log(req.body)
        if (!req.headers.authorization) {
            return res.status(403).json({ error: 'No credentials sent!' });
        }

        // check valid
        console.log(req.headers.authorization);

        next();
    };
    app.use(checkAuth);

    app.use('/api/products', product);
    app.use('/api/review', review);

    //invalid url
    app.all('*', function(req, res) {
        res.send("invalid url " + String(req.url));
    });

}