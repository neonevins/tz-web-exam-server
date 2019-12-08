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
});

module.exports = mongoose
