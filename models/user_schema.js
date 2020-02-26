const db = require('./db');
var schema = db.Schema({
    f_name: { type: String, require: true, trim: true },
    l_name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true }
});

schema.methods.toJSON = function() {

    var object1 = this.toObject();
    delete object1.password;
    delete object1._id;

    return object1;
}


// compilation of schema 
module.exports = db.model('user', schema)