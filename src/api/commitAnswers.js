/*
* 传入数组answers字段   每一项为对象，包含属性id:Number answer:Array
* eg:
*
* {
*   answers : [
*       {id:1111,answer:[0]},
*       {id:1222,answer:[0,1]}
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
                && typeof v.id === "number"
                && typeof Array.isArray(v.answer)
            ){
                let a = {};
                let data;
                try{
                    data = await question.findOne({id:v.id});
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