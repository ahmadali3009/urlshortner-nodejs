let express = require("express")
let {connect} = require('./connection')
let path = require("path")
let cookieParser = require('cookie-parser')
let {cheakAuthentication , restricto} = require('./middlewares/auth')

let staticRouter = require('./routes/staticRouter')
let router = require('./routes/url')
let userRouter = require('./routes/user')

let server = express();
connect("mongodb://127.0.0.1:27017/shorturl").then(()=>{console.log("connection connected")}).catch((err)=>{console.log(err)})

server.use(express.json());
server.use(express.urlencoded({extended : false}))
server.use(cookieParser());
server.use(cheakAuthentication)

server.set("view engine" , "ejs")
server.set("views" , path.resolve("./views"))

server.use("/url" , restricto(['normal' , 'admin']) , router)
server.use("/" , staticRouter)
server.use("/user" , userRouter)

server.listen(8000 , () =>
{
    console.log("server is connected on 8000")
})