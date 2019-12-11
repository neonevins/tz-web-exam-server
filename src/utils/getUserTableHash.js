const getHash = require("./getHash")
const {UserTable} = require("../db/api/tables")
// 获取正确的用户名的hash
// console.log(AdminTable)
async function getUserTableHash(token){
  const  result = await UserTable.findOne({token})
  console.log(result)
  // const admin = {user, password}
  if(!result) {
    return {
      code: 1,
      message: "token无效或者cookie无效",
      data: {cookie: {token}}
    }
  }else{
    const {user, password} = result
    return {
      code: 0,
      message: "验证成功",
      data: {cookie: {token:getHash({user, password})}}
    }
  }
}
module.exports = getUserTableHash
