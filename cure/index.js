const { UserModel, MenuModel } = require("../db")
const find = (condition, ctx, next) => {
    return UserModel.find(condition)
}
const insertOne = (condition, ctx, next) => {
    // console.log(condition, '------------')
    return UserModel.create(condition)
}

const menufind = (condition, ctx, next) => {
    // console.log(condition, '------------')
    return MenuModel.find(condition)
}
module.exports = {
    find,
    insertOne,
    menufind
}