const getHash = require("../utils/getHash")
const {UserTable} = require("../db/api/tables")
// 获取正确的用户名的hash
// console.log(AdminTable)
async function getToken(){
  const  {user, password, disabled} = await UserTable.findOne({})
  const admin = {user, password}
  if(disabled) {
    return false // 如果用户被禁用直接返回false
  }else{
    return getHash(admin)
  }
}
const adminHash = getToken()
// console.log(adminHash)
module.exports = adminHash
