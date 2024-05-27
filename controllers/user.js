let user = require("../models/user")

let { v4: uuidv4 } = require('uuid');
let {setUser} = require('../services/auth')
async function handlerUserSignUp(req , res)
{
    let {name , email , password} = req.body
     await user.create({
        name,
        email,
        password
    })
   return res.redirect("login")
}
async function handlerUserLogin(req , res)
{
    let {email , password} = req.body
    let find = await user.findOne({email , password})
    if(!find)
    {
        res.render('login' , {error : 'invalid username or password' })
    }
    
    let token = setUser(find)
    res.cookie("token" , token)
   return res.redirect("/")
}


module.exports = {handlerUserSignUp , handlerUserLogin}