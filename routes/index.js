const fs = require('fs')
const Router = require('koa-router')
const { MenuModel } = require("../db")
const router =new Router
fs.readdirSync(__dirname).forEach(iters =>{
  if (iters != 'index.js') {
    const rs = require('./' + iters)
    router.use(rs.routes(), rs.allowedMethods())
  }
})


// MenuModel.insertMany(
//   [{
//     Mid:'/manage',
//     name: 'dooring工作台'
//   },
//   {
//     Mid:'/manage/anazly',
//     name: '数据大盘'
//   },
//   {
//     Mid:'/manage/h5',
//     name: 'H5服务中心'
//   }]
// )

// const router = require('koa-router')()
// const {UserModel} = require('../db')

// UserModel.create({name: '张三', password: 123456})
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 236!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
