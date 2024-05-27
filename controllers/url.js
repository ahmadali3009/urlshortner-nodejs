let {nanoid} = require("nanoid")
let url = require("../models/url")
let user = require('../models/user')
async function handlerNewShortUrl (req , res)
{
    let body = req.body
    let shortID = nanoid(8);
    await url.create({
        shortId : shortID , 
        redirectUrl : body.url,
        visitHistory : [],
        createdBy : req.user._id,
    })
    return res.render("home", {id : shortID})
    
}
async function handlerRedirect(req , res)
{
    let shortId = req.params.shortId
    let entry = await url.findOneAndUpdate({
        shortId
    },
    {
        $push:{visitHistory : {timestamp : Date.now()},
    }
    }
    )
return  res.redirect(entry.redirectUrl)
}
async function handlerclicks(req , res){
    let shortId = req.params.shortId
    let result = await url.findOne({shortId});
    res.render("home", {totalClick: result.visitHistory.length,
    analytic: result.visitHistory})
    
}




module.exports = 
{
    handlerNewShortUrl,
    handlerRedirect,
    handlerclicks,
    
}