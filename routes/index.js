const fs = require('fs')
const Router = require('koa-router')
const router =new Router
fs.readdirSync(__dirname).forEach(iters =>{
  if (iters != 'index.js') {
    const rs = require('./' + iters)
    router.use(rs.routes(), rs.allowedMethods())
  }
})
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
