const router = require('koa-router')()
const userOperation = require('../ControlLLayer')
router.prefix('/users')

router.post('/addUser', userOperation.addUser)

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })
router.post('/bar', userOperation.getUser)

module.exports = router
