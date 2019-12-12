// 管理员数据表
const mongoose = require("./db")

const Schema = mongoose.Schema

const userSchema = new Schema({
  user: {type: String},
  password: {type: String},
  disabled: {
    type: Boolean,
    default: false
  },
  token: {type: String},
  avatarPath: {
    type: String,
    default: "avatar/default.jpg"
  },
  userType: {
    type: String,
    default: "ordinary"
  },
  sex: {
    type: String,
    default: "female"
  },
  nickname: {
    type: String,
    default: "女装大佬"
  }
})
const UserTable = mongoose.model('user',userSchema)

module.exports = {
  UserTable
}
