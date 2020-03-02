const {topicCategoryTable} = require("./api/tables")

async function getList(){
  let result = await topicCategoryTable.find({})
  return Promise.resolve({
    code: 0,
    message: "数据查询成功",
    data: {
      list: result
    }
  })
}
async function update(){
  await topicCategoryTable.create({name: 'html', backgroundPath: 'http://47.104.155.140/category/html.jpg'})
  await topicCategoryTable.create({name: 'css', backgroundPath: 'http://47.104.155.140/category/css.jpg'})
  await topicCategoryTable.create({name: 'javascript', backgroundPath: 'http://47.104.155.140/category/javascript.jpg'})
  await topicCategoryTable.create({name: 'nodeJS', backgroundPath: 'http://47.104.155.140/category/nodeJS.jpg'})
  await topicCategoryTable.create({name: 'react', backgroundPath: 'http://47.104.155.140/category/react.jpg'})
  await topicCategoryTable.create({name: 'vue', backgroundPath: 'http://47.104.155.140/category/vue.jpg'})
}

module.exports = {
  getList,
  update
}
