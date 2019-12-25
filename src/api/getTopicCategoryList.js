const topicCategoryMode = require("../db/topicCategoryMode")

module.exports = function (req, res) {
  // if(req.query.mode === 'upload'){
  //   topicCategoryMode.update().then(()=>{
  //     res.send("更新成功")
  //   })
  //    return
  // }
  topicCategoryMode
    .getList()
    .then(data => {
      res.send(data)
    })


}
