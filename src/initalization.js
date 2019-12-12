const {UserTable} = require("./db/api/tables")
const getHash = require("./utils/getHash")
async function initalization(){
  let result = await UserTable.findOne({userType: "admin"})
  if(!result){
    await UserTable.create({
      user: "yinshi",
      password: "123",
      userType: "admin",
      disabled: false,
      token: getHash({user: "yinshi", password: "123"})
    })
    console.log("初始化管理员成功")
  }
}
module.exports = initalization
