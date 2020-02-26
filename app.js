const bodyParser = require('body-parser');
// const user = require('./routes/user');
// const login = require('./routes/login');
// const product = require('./routes/product');
// const review = require('./routes/review');

var index = require('./routes/index')


module.exports = function(app) {

    app.use(bodyParser.text())
    app.use('/api', index)

    // app.use('/api/auth', user);

    // app.use('/api/auth', login);

    // const checkAuth = (req, res, next) => {
    //     console.log(req.body)
    //     if (!req.headers.authorization) {
    //         return res.status(403).json({ error: 'No credentials sent!' });
    //     }
    //     next();
    // };
    // app.use(checkAuth);

    // app.use('/api/products', product);
    // app.use('/api/review', review);

    //invalid url
    app.all('*', function(req, res) {
        res.send("invalid url " + String(req.url));
    });

}