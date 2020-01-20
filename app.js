const express = require("express")
const path = require("path")
//安全性相关的HTTP标头安全性相关的HTTP标头
const helmet = require("helmet")
const app = express()
app.use(helmet())
const cookieParser = require("cookie-parser")
app.use(cookieParser())


const router = require("./src/routers")

// 缓存静态资源
app.use(express.static('uploads'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'publicDoc')))


// 允许跨域
app.all("*",function (req, res, next) {
  res.header({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': req.headers.origin || '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json; charset=utf-8'
  })
  if( req.method === "OPTIONS" ) {
    res.sendStatus(200)
    console.log("has option")
  } else {
    console.log("已经完成跨域")
    next()
  }
})

// 解析bodyParser
const bodyParser = require("body-parser")
app.use(bodyParser.json({limit: '2mb'}))
app.use(bodyParser.urlencoded({limit: '2mb',extended: false}))


app.use(router)

app.listen(8030, ()=>{
  console.log("服务器启动, 端口 8030 开启")
})
