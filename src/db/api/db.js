// 连接数据库
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test")
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('服务器连接成功')
});

module.exports = mongoose
