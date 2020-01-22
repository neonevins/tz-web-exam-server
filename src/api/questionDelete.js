/*
* 题目删除
*
* GET
* 前端参数：
* {
*   _id : String，必须，题目对应的_id
* }
*
* */
const question = require("../db/api/questions");
module.exports = async (req,res)=>{
    let {_id} = req.query;

    let info = {};
    console.log(_id)
    if (
        _id
        && typeof _id === "string"
    ){
        /*删除*/
        try{
            let data = await question.deleteOne({_id});
            if (data.n){
                info = {
                    code : 0,
                    message: "操作成功。"
                };
            }else{
                info = {
                    code : 0,
                    message : "操作成功，但未查询到对应数据",
                    data
                }
            }
        }catch (e) {
            info = {
                code : 4,
                message : "服务器操作失败o(╥﹏╥)o"
            };
        }


    }else{
        /*_id字段出错*/
        info = {
            code : 1,
            message : "_id字段类型错误！"
        }
    }

    res.send(info);
};
