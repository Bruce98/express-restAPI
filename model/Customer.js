var mongoose = require('./db.js')

var Schema   = mongoose.Schema;

var CustomerSchema = new Schema({
	CustomerName:String,//客户
    address:String, //客户地址
    Telephone: String, //联系电话
	brand:String, //电机品牌
    ElectricName: String, //电机名
    ElectricModel:String, //型号
    Price: Number, //修理费单价
    details: String, //电机详情
    Voltage: String, //电压(单位:V)
    startTime:{ //开始时间
    	type: Date,
        default: Date.now
    } ,
    endTime:{ //结束时间
    	type: Date,
        default: Date.now
    },
    
});


module.exports = mongoose.model('Customer', CustomerSchema);