const db = require('./db');
var user = db.Schema({
    f_name: { type: String, require: true, trim: true },
    l_name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true }
});


// compilation of schema 
module.exports = db.model('userdata', user, 'user')