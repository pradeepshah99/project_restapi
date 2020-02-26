const db = require('./db');

var productSchema = db.Schema({
    p_name: { type: String, require: true, trim: true },
    p_desc: { type: String, require: true, trim: true },
    p_image: { type: String, require: true },
    obj_id: { type: String, require: true },
    reviews: { type: String }
});


// compilation of schema 
module.exports = db.model('productdata', productSchema, 'product')