const router = require('koa-router')()
const userOperation = require('../ControlLLayer')
router.prefix('/menus')
router.post('/getmenuslist', userOperation.getmenu)

module.exports = router
