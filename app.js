const express = require("express")
const helmet = require("helmet")
const path = require("path")
const cookieParser = require("cookie-parser")
// const session = require('express-session')
const router = require("./src/routers")

const app = express()
//安全性相关的HTTP标头安全性相关的HTTP标头

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'publicDoc')))


app.use(helmet())
app.use(cookieParser())
// 允许跨域
app.all("*",function (req, res, next) {
  res.header({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': req.headers.origin || '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json; charset=utf-8'
  })
  if( req.method == "OPTIONS" ) {
    res.send(200)
    console.log("has option")
  } else {
    next()
  }
})

app.use(router)



// 缓存静态资源

app.listen(8030)
