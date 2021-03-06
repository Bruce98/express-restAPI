//mongdb 数据库
var mongoose = require('mongoose');
    DB_URL = 'mongodb://47.93.18.206:8303/ModuleData';
//连接数据库
mongoose.connect(DB_URL);
//连接成功
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);  
});  

//连接异常

mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
//连接断开
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});  


module.exports = mongoose