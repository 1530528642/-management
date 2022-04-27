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

const MenuSchema = new mongoose.Schema({
    Mid: {
        type: String
    },
    name: {
        type: String
    },
    parent_id: {
        type: Number
    },
    sort: {
        type: Number
    },
    url: {
        type: String
    },
    icon: {
        type: String
    },
    perms: {
        type: Number
    },
    type: {
        type: Number
    }
})

const UserModel = mongoose.model('User', UserSchema, 'users')
const MenuModel = mongoose.model('Menu', MenuSchema, 'menus')

module.exports =  {
    UserModel,
    MenuModel
}