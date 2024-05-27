
let {getUser} = require('../services/auth')

function cheakAuthentication(req , res , next)
{
    let tokenCookie = req.cookies?.token
    req.user = null
    if(!tokenCookie) return next()
    let token = tokenCookie;
    let user = getUser(token)
    req.user = user
    next()
}

function restricto(role = [])
{
    return function (req , res , next)
    {
        if(!req.user) return res.redirect('/login')
        if(!role.includes(req.user.role)) return res.end('UnAuthorized User')
         return next()
    }
}

module.exports = {cheakAuthentication , restricto}