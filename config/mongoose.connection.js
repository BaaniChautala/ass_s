const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://localhost:27017', {
        dbName: 'users_db',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => {
        console.log('mongodb connected...')
    }).catch(err => console.log(err.message))

}