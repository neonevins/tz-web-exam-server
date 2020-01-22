/*
* 获取题目列表接口
* 前端 GET 传入数据格式：
* {
*   type : 必须，string
*           ***要获取的题目类型，可选："HTML" "CSS" "JS" "VUE" "REACT" "NODE"
* }
*
* eg:
*   {type:"HTML"}
* */



const question = require("../db/api/questions");

/*
* 返回数组随机10位数据，数据原顺序不变
* */
function getRandom10(arr){
    if(arr.length<10)return arr;
    let newArr = [];
    let indexArr = [];
    let indexItem = [];
    for(let i=0;i<arr.length;i++)indexItem.push(i);
    for (let i=0;i<10;i++){
        let randomIndex = Math.random()*indexItem.length;
        indexArr.push(indexItem[Math.floor(randomIndex)]);
        indexItem.splice(randomIndex,1);
    }
    indexArr.sort((a,b)=>a-b).forEach(v=>newArr.push(arr[v]));
    return newArr;
}


module.exports = (req,res)=>{
    let type = {...req.body,...req.query}.type;

    /*检查有没有type字段*/
    if (!type || (typeof type !== "string")){
        res.send({
            code : 1,
            message : "查询失败，请传入正确的type字段"
        });
    }else{
        question
            .find({type},{rightOptions:0,analysis:0})
            .then(data=>{
                if (data.length){
                    res.send({
                        code : 0,
                        message : "查询成功。",
                        data : getRandom10(data)
                    });
                }else{
                    res.send({
                        code : 1,
                        message : "查询失败，题库不足"
                    });
                }
            })
            .catch(e=>{
                res.send({
                    code : 1,
                    message : "查询失败！",
                    data : e
                });
            })

    }



};