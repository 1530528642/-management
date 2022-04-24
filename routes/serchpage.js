const router = require('koa-router')()
const userOperation = require('../ControlLLayer')
const {auth} = require('../middleware/auth')
router.prefix('/users')
router.post('/getpage', auth, userOperation.findpage)

module.exports = router
