const question = require("../db/api/questions");


module.exports = (req,res)=>{
    let {
        id,type,title,code="",options,rightOption,analysis
    } = {...req.query,...req.body};

    question
        .create({
            id,type,title,code,options,rightOption,analysis
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