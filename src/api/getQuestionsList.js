/*
*
* 传入字符串type字段
* 允许的取值为 ： "HTML"  "JS"  "CSS"  "VUE"  "REACT"   "NODE"
* 不区分大小写
*
* eg:
*
*   {type:"HTML"}
* 或者
*   {type:"JS"}
*
*
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
                        message : "查询失败，请传入正确的type字段"
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