var express = require('express');
var services = require('../controllers/user_services')
var router = express.Router();


// registered the users and its details

router.post('/register', function(req, res) {
    services.register(req, res)
})

// Delete the user through user id

router.delete('/delete', function(req, res) {

    services.delete_user(req, res)

})

// update the user dewtails through user id

router.put('/update', function(req, res) {
    services.update_user(req, res)
})


// Retrieve the user details through the database

router.get('/users', function(req, res) {
    services.get_user(req, res)
})

module.exports = router;