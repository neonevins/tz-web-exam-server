/*
* 用户答案提交接口
* 前端 POST 传入数据格式：
* {
*   answers : 必须，[object]
*               ***数组，其中每一项为对象，对象需要两个属性
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
*   answers : [
*       {_id:"123456",answer:[0]},
*       {_id:"122267",answer:[0,1]}
*   ]
* }
*
* */

const question = require("../db/api/questions");

module.exports = async (req,res)=>{
    let {answers} = {...req.query,...req.body};
    if (answers && Array.isArray(answers)){
        let result = [];
        for (const v of answers) {
            if (
                v!==null
                && typeof(v)==="object"
                && v._id
                && typeof Array.isArray(v.answer)
            ){
                let a = {};
                let data;
                try{
                    data = await question.findById(v.id);
                    if (data.length){
                        a.code = 0;
                        let rightAnswer = [...data.rightOptions];
                        let answer = v.answer;
                        rightAnswer.sort((a,b)=>a-b);
                        answer.sort((a,b)=>a-b);
                        a.result = (rightAnswer + "") === (answer + "");
                        a.analysis = data.analysis;
                    }else{
                        a = {code: 1, message : "本题ID未查询到"}
                    }
                }catch (e) {
                    a = {code: 1, message : "查询出错"}
                }
                result.push(a);
            }else{
                result.push({
                    code: 1,
                    message : "本题数据错误"
                });
            }
        }
        res.send({
            code : 0,
            message : "查询完成。",
            data : result
        });
    }else{
        res.send({
            code : 1,
            message : "请提交正确的answers数据！"
        });
    }
};