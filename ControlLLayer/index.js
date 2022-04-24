// const { UserModel } = require("../db")
const { find, insertOne } = require("../cure")

// 添加用户
const addUser = async function (ctx, next) {
    const serchdata = await find(ctx.request.body, ctx, next)
    if (serchdata.length > 0) {
        ctx.body = {
            msg: '该用户已存在',
            data: []
        }
    } else {
        const resdata = await insertOne(ctx.request.body, ctx, next)
        ctx.body = resdata
    }
}
// 查询
const getUser = async function (ctx, next) {
    const resdata = await find(ctx.request.body, ctx, next)
    ctx.body = resdata
}

module.exports = {
    getUser,
    addUser
}