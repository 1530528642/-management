const router = require('koa-router')()
const userOperation = require('../ControlLLayer')
router.prefix('/goods')
router.post('/isimg', userOperation.copmeImg)

module.exports = router
