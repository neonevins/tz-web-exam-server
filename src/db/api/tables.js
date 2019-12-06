// 管理员数据表
const mongoose = require("./db")

const Schema = mongoose.Schema

// 管理员婊
const userSchema = new Schema({
  user: {type: String},
  password: {type: String},
  disabled: {
    type: Boolean,
    default: true
  }
})
const AdminTable = mongoose.model('admin',userSchema)
module.exports = {
  AdminTable: AdminTable
}
