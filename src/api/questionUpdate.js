/*
* 题目更新接口
* GET
* 前端参数：
* *
*
* {
*   _id : String，必须
*       ***题目id
*   data : {
*       type : 必须，string
*           ***题型，可选："HTML" "CSS" "JS" "VUE" "REACT" "NODE"
*       title : 必须，string
*           ***题目
*       code ： 可选，string
*           ***题目所需的代码
*       options : 必须，[string,string,…]
*           ***选项数组，每一项为字符串
*       rightOptions : 必须，[number,…]
*           ***正确答案数组，每一项为数字（正确选项对应的序号），单选也需要传入数组但只需要一个序号数据
*       analysis ： 可选，string
*           ***题目解析，默认"略"
*     }
* }
* */
const question = require("../db/api/questions");
module.exports = async (req,res)=>{
    let {_id,data} = req.query;
    data = JSON.parse(data)
    console.log(_id, data)
    let result = {};
    if (
        _id
        && typeof _id === "string"
        && data
        && typeof data === "object"
    ){
        try{
            let d = await question.updateOne({_id},data);
            if (d.n){
                result = {code:0,message:"更新成功。"};
            }else{
                result = {code:0,message:"操作成功，但是未查找到数据",d};
            }
        }catch (e) {
            console.log(e)
            result = {code:1,message:"更新失败o(╥﹏╥)o",data:e}
        }

    }else{
        result = {code:1,message:"参数格式错误！"}
    }

    res.send(result);
};







