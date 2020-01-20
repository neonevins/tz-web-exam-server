
/*
添加题目接口
* 前端 POST 传递数据格式：
*
* {
*   type : 必须，string
*           ***题型，可选："HTML" "CSS" "JS" "VUE" "REACT" "NODE"
*   title : 必须，string
*           ***题目
*   code ： 可选，string
*           ***题目所需的代码
*   options : 必须，[string,string,…]
*           ***选项数组，每一项为字符串
*   rightOption : 必须，[number,…]
*           ***正确答案数组，每一项为数字（正确选项对应的序号），单选也需要传入数组但只需要一个序号数据
*   analysis ： 可选，string
*           ***题目解析，默认"略"
* }
*
*
* */
const question = require("../db/api/questions");

module.exports = (req,res)=>{
    let {
        type,title,code="",options,rightOption,analysis
    } = {...req.query,...req.body};

    console.log(options);
    console.log(rightOption);
    question
        .create({
            type,title,code,options,rightOption,analysis
        })
        .then(r =>{
            res.send({
                code : 0,
                message : "添加成功"
            });
        })
        .catch(err=>{
            res.send({
                code : 1,
                message : "添加失败",
                data : err
            });
        });
};