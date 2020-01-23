/*
 * 所有用户查询接口
 * GET
 * 前端参数：无
 * {
 *
 * }
 *
 *
 *
 * */
const {UserTable} = require("../db/api/tables")
async function userSearch(req, res){
  let result = await UserTable.find({})
  res.send(result)
}


module.exports = userSearch
