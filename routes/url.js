let express = require("express")
let router = express.Router()
let {handlerNewShortUrl ,
    handlerRedirect,
    handlerclicks} = require("../controllers/url")

router.post("/" , handlerNewShortUrl )
router.get("/:shortId" , handlerRedirect )
router.get("/analytic/:shortId" , handlerclicks)


module.exports = router;