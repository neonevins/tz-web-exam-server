// 用户数据表
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
    default: "http://47.104.155.140/avatar/default.jpg"
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


// 题型数据列表
const topicCategorySchema = new Schema({
  name: {type: String},
  backgroundPath: {type: String},
})

const topicCategoryTable = mongoose.model('topicCategory',topicCategorySchema)



module.exports = {
  UserTable,
  topicCategoryTable
}
