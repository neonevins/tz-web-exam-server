// 题目数据表
const mongoose = require("./db");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id : {type:Number,require:true},
    type : {type: String,require: true},
    title : {type: String,require: true},
    code : {type: String},
    options : [{type: String,require: true}],
    rightOptions : [{type: Number,require: true}],
    analysis : {type:String,default:"略"}
});

module.exports = mongoose.model("question",questionSchema);