var db = require('../models/review_schema')
var db_product = require('../models/product_schema')


// Crete the Product Reviews by the product Id

exports.create_review = (req, res) => {
    var content = JSON.parse(req.body.toString())

    db_product.findOne({ p_id: req.params.p_id }, function(err, docs) {

        if (docs == null) {
            var obj = new db({
                review_id: content.review_id,
                review_message: content.review_message,
                product_id: req.params.p_id
            })
            obj.save((err, data) => {
                if (!err) { res.send('review added') } else { res.send('review not added') }
            })
        } else {
            res.send('product not exist')
        }
    })

}

// Update the reviews according to product Id

exports.update_review = (req, res) => {

    var content = JSON.parse(req.body.toString())

    db.findOneAndUpdate({ review_id: req.params.id, product_id: req.params.p_id }, content, { new: true }, function(err, doc) {
        if (doc === null) {

            res.send("product review or review id not exist");

        } else {
            res.send("review updated");

        }

    })
}

// Delete the product reviews by the product Id

exports.delete_review = (req, res) => {

    db.deleteOne({ review_id: req.params.id, product_id: req.params.p_id }, function(err, doc) {
        if (doc.deletedCount === 0) {

            res.send("product review or review id not exist");

        } else {
            res.send("review deleted");

        }

    })
}

// Showing the revies of the particular product according to its product Id

exports.show_product_reviews = (req, res) => {

    var u_id = req.params.p_id
    db.find({ product_id: u_id }, function(err, doc) {
        if (doc.length) {
            res.send(doc)
        } else {
            res.send('no review for this user product')
        }
    })


    // db.find({}).populate('product_id').exec(function(err, doc) {
    //     res.send(doc)
    // })



}