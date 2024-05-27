let express = require("express")
let {restricto} = require('../middlewares/auth')
let url = require('../models/url')


let router = express.Router()


router.get('/admin/urls' , restricto(['admin']) , async (req , res)=>
{
   
    let allUrl = await url.find({}).populate('createdBy', 'email');
    return res.render("home" , {urls : allUrl})
})

router.get("/" , restricto(['normal','admin']) , async (req , res)=>
{
   
    let allUrl = await url.find({createdBy : req.user._id});

    return res.render("home" , {urls : allUrl , email : req.user.email})
})

router.get('/signup' , (req , res)=>
{
    return res.render('signup')
})
router.get('/login' , (req , res)=>
{
    return res.render('login')
})
module.exports = router;