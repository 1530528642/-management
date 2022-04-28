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

// 递归菜单 parent_id为父id mid为自身id 一级父id为0 子级parent_id为父级mid
const getmenu = async function (ctx, next) {
    const resdata = await menufind(ctx.request.body, ctx, next)

    let menudatas = []
    function setItem(children, Mid) {
        resdata.map((items) => {
            if(items.parent_id === Mid) {
                // console.log(items.parent_id, '-------------', Mid)
                let scurt = {
                    name: items.name,
                    parent_id: items.parent_id,
                    url: items.url,
                    children: []
                }
                children.push(scurt)
                setItem(scurt.children, items.Mid)
            }
        })
    } 

    function getParntNode() {
        resdata.map((items) => {
            if (items.Mid === 1 || items.Mid === 2 || items.Mid === 3) {
                let scurtParnt = {
                    name: items.name,
                    parent_id: items.parent_id,
                    url: items.url,
                    children: []
                }
                setItem(scurtParnt.children, items.Mid)
                menudatas.push(scurtParnt)
            }
        })
    }
    
    getParntNode()
    ctx.body = {
                status: 200,
                msg: '登录成功1111',
                data: menudatas
    }
}

module.exports = {
    getUser,
    addUser,
    findpage,
    copmeImg,
    getmenu
}