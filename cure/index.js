const { UserModel } = require("../db")
const find = (condition, ctx, next) => {
    return UserModel.find(condition)
}
const insertOne = (condition, ctx, next) => {
    return UserModel.create(condition)
}
module.exports = {
    find,
    insertOne
}