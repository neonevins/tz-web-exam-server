/*
 * 用户答案提交接口
 * 前端 POST 传入数据格式：
 * {
 *   answers : 必须，{}
 *               ***对象，其中每一项为对象，对象需要两个属性
 *                   {
 *                       _id : 必须，string
 *                               ***该题对应的_id（在获取题目列表时会返回_id到前端）
 *                       answer : 必须，[number,…]
 *                               ***用户所选答案的序号列表
 *                   }
 * }
 *
 *
 * eg：
 * {
 *   result:{
 *      answers :{
 *          _id:"123456",answer:[0]
 *          _id:"123457",answer:[0, 1]
 *     },
 *   }
 *
 *
 *
 * }
 *
 * */

const question = require("../db/api/questions")

module.exports = async (req, res) => {
  let result = {...req.query, ...req.body}
  result = JSON.parse(result.result).answers
  let answers = Object.entries(result)
  let resultPromiseList = []
  for (let i of answers) {
    // console.log(i, question.findById(i[0]))
    resultPromiseList.push(question.findById(i[0]))
  }

  // 最终返回结果
  let final = {}
  Promise.all(resultPromiseList)
  .then(ansList => {
    // 正确答案列表
    ansList = ansList.map(item => {
      return {
        rightOptions: item.rightOptions,
        _id: item._id
      }
    })
    answers.forEach(item => {
      const key = item[0]
      const value = item[1]
      const rightVal = ansList.find(i => i._id + "" === key)
        final[key] = rightVal.rightOptions.toString() === value
    })
    res.send(final)
  })
}
