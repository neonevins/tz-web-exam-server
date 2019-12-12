// 连接数据库
const mongoose = require("mongoose")

mongoose.connect(
  "mongodb://localhost:27017/test",
  {
    useNewUrlParser:true,
    useUnifiedTopology: true
  }
  )
  .then(() => {
  console.log("mongoose连接成功")
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库连接成功')
  const initalzation = require("../../initalization")
// 项目启动初始化, 新建 管理员账号
  initalzation()
});

module.exports = mongoose
