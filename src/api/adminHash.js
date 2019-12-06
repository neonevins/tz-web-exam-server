const getHash = require("../utils/getHash")
const {AdminTable} = require("../db/api/tables")
// 获取正确的用户名的hash
// console.log(AdminTable)
async function getToken(){
  const  {user, password} = await AdminTable.findOne({})
  const admin = {user, password}
  return getHash(admin)
}
const adminHash = getToken()
// console.log(adminHash)


module.exports = adminHash
