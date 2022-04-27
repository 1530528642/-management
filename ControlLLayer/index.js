// const { UserModel } = require("../db")
// import jwt from "koa-jwt"
// const JWT = require('koa-jwt')\
const {APP_PORT} = require("../config/configdis")
const JWT = require('jsonwebtoken')
const path = require('path')
const { find, insertOne, menufind } = require("../cure")

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
// 登录
const getUser = async function (ctx, next) {
    const resdata = await find(ctx.request.body, ctx, next)
    if (resdata.length > 0) {
        ctx.body = {
            status: 200,
            msg: '登录成功',
            token: JWT.sign({name: resdata[0].name, _id: resdata[0]._id}, 'ondata', {expiresIn: '1d'} )
        }
    } else {
        ctx.body = {
            status: 300,
            msg: '该用户不存在',
            data: []
        }
    }
}
//上传图片
const copmeImg = async function (ctx, next) {
    // console.log(ctx.request.files, '------------------')
    const {file} = ctx.request.files
    // console.log(file, '++++++++++++++++++++++++')
    ctx.body = {
                status: 200,
                Filesl: path.basename(file.filepath)
    }
}
// 查询分页
const findpage = async function (ctx, next) {
    ctx.body = {
                status: 200,
                msg: '登录成功1111',
                data: []
    }
    // const resdata = await find(ctx.request.body, ctx, next)
    // if (resdata.length > 0) {
    //     ctx.body = {
    //         status: 200,
    //         msg: '登录成功',
    //         token: JWT.sign({name: resdata[0].name, _id: resdata[0]._id}, 'ondata', {expiresIn: '1d'} )
    //     }
    // } else {
    //     ctx.body = {
    //         status: 300,
    //         msg: '该用户不存在',
    //         data: []
    //     }
    // }

}

// 获取菜单
const getmenu = async function (ctx, next) {
    const resdata = await menufind(ctx.request.body, ctx, next)
    ctx.body = {
                status: 200,
                msg: '登录成功1111',
                data: resdata
    }
}

module.exports = {
    getUser,
    addUser,
    findpage,
    copmeImg,
    getmenu
}