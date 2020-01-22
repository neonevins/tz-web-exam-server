const {UserTable} = require("./api/tables")

const getHash = require("../utils/getHash")

// 校验用户密码, 返回promise
async function checkUser(query) {
  const {user, password} = query
  // 参数错误
  if (!user || !password) {
    return Promise.resolve({
      code: 3,
      message: "参数错误",
      data: {cookie: {token: ""}}
    })
  }
  let data = await UserTable.findOne({user})

  // 用户不存在
  if (!data) {
    return Promise.resolve({
      code: 3,
      message: "用户不存在",
      data: {cookie: {token: ""}}
    })
  }

  /*// 权限不足
  if (data.disabled) {
    return Promise.resolve({
      code: 4,
      message: "权限不足,禁止访问",
      data: {cookie: {token: getHash({user, password})}}
    })
  }*/
  //密码错误
  if (data.password !== password) {
    return Promise.resolve({
      code: 3,
      message: "密码错误",
      data: {cookie: {token: ""}}
    })
    // 登录成功
  } else {
    return Promise.resolve({
      code: 0,
      message: "登录成功",
      data: {cookie: {token: getHash({user, password})}}
    })
  }
}


// 如果没有用户就添加用户, 如果有就更新密码
async function addUser(query) {
  const {user, password} = query
  // 参数错误
  if (!user || !password) {
    return Promise.resolve({
      code: 3,
      message: "参数错误",
      data: {cookie: {token: ""}}
    })
  }
  let ans = await UserTable.findOne({user})
  let token = getHash({user, password})
  if (ans) {
    // 修改数据
    await UserTable.updateOne({user}, {$set: {password, token}})
    return Promise.resolve({
      code: 0,
      message: "更新成功",
      data: {cookie: {token}}
    })
  } else {
    // 添加数据
    await UserTable.create({user, password, disabled: false, token})
    return Promise.resolve({
      code: 0,
      message: "添加成功",
      data: {cookie: {token}}
    })
  }
}

module.exports = {
  checkUser,
  addUser
}
