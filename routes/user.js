var services = require('../controllers/user_services')

module.exports = (router) => {


    // registered the users and its details


    router.post('/register', function(req, res) {
        services.register(req, res)
    })

    // Delete the user through user id

    router.delete('/delete', function(req, res) {

        services.delete_user(req, res)

    })

    router.delete('/delete/:id', function(req, res) {

        services.delete_user1(req, res)

    })

    // update the user dewtails through user id

    router.put('/update', function(req, res) {
        services.update_user(req, res)
    })


    // Retrieve the user details through the database

    router.get('/users', function(req, res) {
        services.get_user(req, res)
    })
}