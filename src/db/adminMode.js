const {AdminTable} = require("./api/tables")
// 校验用户密码, 返回promise
async function checkUser(query){
  const {user, password} = query
  // 参数错误
  if(!user || !password){
    return Promise.resolve({
      code: 3,
      message: "参数错误"
    })
  }
  let data = await AdminTable.findOne({user})

  // 用户不存在
  if(!data){
    return Promise.resolve({
      code: 3,
      message: "用户不存在"
    })
  }

  //密码错误
  if(data.password !== password){
    return Promise.resolve({
      code: 3,
      message: "密码错误"
    })

  // 登录成功
  }else{
    return Promise.resolve({
      code: 0,
      message: "登录成功"
    })
  }
}


// 如果没有用户就添加用户, 如果有就更新密码
async function addUser(query){
  const {user, password} = query
  // 参数错误
  if(!user || !password){
    return Promise.resolve({
      code: 3,
      message: "参数错误"
    })
  }
  let ans = await AdminTable.findOne({user})
  if(ans){
    // 修改数据
    await AdminTable.updateOne({user},{$set:{password}})
    return Promise.resolve({
      code: 0,
      message: "更新成功"
    })
  }else{
    // 添加数据
    await AdminTable.create({user,password})
    return Promise.resolve({
      code: 0,
      message: "添加成功"
    })
  }
}



module.exports = {
  checkUser,
  addUser
}
