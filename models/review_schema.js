const db = require('./db');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var reviewSchema = db.Schema({
    review_id: { type: String, require: true, trim: true },
    review_message: { type: String, require: true, trim: true },
    product_id: { type: String, require: true, trim: true }

    // product_id: { type: Schema.Types.ObjectId, ref: 'Product' }
});


// compilation of schema 
module.exports = db.model('reviewdata', reviewSchema, 'review')