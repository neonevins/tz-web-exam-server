/*
* 所有题目查询接口
* GET
* 前端参数：
* {
*   type : String，必须，题型，可选 "HTML" "CSS" "JS" "VUE" "REACT" "NODE"
* }
*
*
*
* */
const question = require("../db/api/questions");
module.exports = async (req,res)=>{
    let {type} = req.query;
    if (
        type
        && typeof type === "string"
    ){
        /*查询*/
        let data;
        try{
            data = await question.find({type});
        }catch (e) {
            res.send({
                code : 1,
                message: "服务器查询出错(ಥ﹏ಥ)"
            });
            return;
        }

        /*返回*/
        res.send({
            code : 0,
            message : "查询成功。",
            data
        });
    }else{
        /*类型出错*/
        res.send({
            code : 1,
            message : "type字段类型错误。"
        });
    }
};
