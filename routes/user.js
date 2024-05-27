let express = require("express")
let {handlerUserSignUp , handlerUserLogin} = require('../controllers/user')
let router = express.Router();

router.post("/" , handlerUserSignUp)
router.post("/login", handlerUserLogin)

module.exports = router