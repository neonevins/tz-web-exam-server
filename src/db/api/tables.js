// 管理员数据表
const mongoose = require("./db")

const Schema = mongoose.Schema

// // 管理员婊
// const adminSchema = new Schema({
//   user: {type: String},
//   password: {type: String},
//   disabled: {
//     type: Boolean,
//     default: true
//   },
//   token: {type: String}
// })
// const AdminTable = mongoose.model('admin',adminSchema)

// 用户表
const userSchema = new Schema({
  user: {type: String},
  password: {type: String},
  disabled: {
    type: Boolean,
    default: false
  },
  token: {type: String}
})
const UserTable = mongoose.model('user',userSchema)

module.exports = {
  UserTable
}
