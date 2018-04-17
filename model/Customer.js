var mongoose = require('./db.js')

var Schema   = mongoose.Schema;

var BearSchema = new Schema({
    name: String,//电机名
    Price: Number,//修理费单价
    details: String,//电机详情
    Customer:String,//客户
    address:String,//客户地址
    Telephone: String,//联系电话
    MaintenanceTime: new Date(), //维修时间
    CompletionTime: new Date()  //完成时间
});

module.exports = mongoose.model('Customer', BearSchema);