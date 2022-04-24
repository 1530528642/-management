const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: Number
    }
})

const UserModel = mongoose.model('User', UserSchema, 'users')

module.exports =  {
    UserModel
}