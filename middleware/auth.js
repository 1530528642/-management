const jwt = require('jsonwebtoken')
const auth = async (ctx, next) => {
    const token = ctx.request.header.authorization
    try {
        const user = jwt.verify(token, 'ondata')
        ctx.state.user = user
        await next()
    } catch (error) {
       ctx.body =  {
        status: 300,
        msg: 'token错误'
       }
    }
}

module.exports = {
    auth
} 