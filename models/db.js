const mongoose = require('mongoose');
const conn = require('../config/config.json');
const dbpath = conn[0].db_url;


mongoose.connect(dbpath, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

const datab = mongoose.connection;
datab.on('error', () => {
    console.log("Error on the database")
});

datab.once('open', () => {
    console.log('Successfully opened database')
});

module.exports = mongoose;