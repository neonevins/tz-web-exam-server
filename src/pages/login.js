const getHash = require("../utils/getHash")

const admin = {
  user: "yinshi",
  password: "123"
}
const adminHash = getHash(admin)


function loginPage(req, res) {
  console.log(req.cookies.token, adminHash,JSON.stringify(admin))
  if(req.cookies.token === adminHash){
    res.redirect("admin")
  }else{
    res.send("你需要登录")
  }
}

module.exports = loginPage
