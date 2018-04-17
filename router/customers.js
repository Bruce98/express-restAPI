var Customer = require('../model/Customer')


exports.getCustomer = function(req, res) {
        Customer.find(function(err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    }


exports.postCustomer = function(req,res){
    var customer = new Customer()
    customer.CustomerName = req.body.CustomerName;    //客户
    customer.address = req.body.address ;   //客户地址
    customer.Telephone = req.body.Telephone;  //联系电话
    customer.brand = req.body.brand;    //电机品牌
    customer.ElectricName = req.body.ElectricName;    //电机名
    customer.ElectricModel = req.body.ElectricModel;    //型号
    customer.Price = req.body.Price;    //修理费单价
    customer.details = req.body.details; //电机详情 
    customer.Voltage = req.body.Voltage;    //电压(单位:V)  
    customer.startTime  = req.body.startTime;    //开始时间
    customer.endTime = req.body.endTime     //结束时间
    customer.save(function(err){
        if (err)
            res.send(err)
        res.json({message: 'Customer created!'})
    });
}   

exports.getCustomerid =function(req, res) {
        Customer.findById(req.params.cus_id, function(err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    } 


exports.putCustomerid = function(req, res) {
        // 通过bear modle查询一条bear
        Customer.findById(req.params.cus_id, function(err, Customerdata) {
            if (err)
                res.send(err);
            Customerdata.CustomerName = req.body.CustomerName;    //客户
            Customerdata.address = req.body.address ;   //客户地址
            Customerdata.Telephone = req.body.Telephone;  //联系电话
            Customerdata.brand = req.body.brand;    //电机品牌
            Customerdata.ElectricName = req.body.ElectricName;    //电机名
            Customerdata.ElectricModel = req.body.ElectricModel;    //型号
            Customerdata.Price = req.body.Price;    //修理费单价
            Customerdata.details = req.body.details; //电机详情 
            Customerdata.Voltage = req.body.Voltage;    //电压(单位:V)  
            Customerdata.startTime  = req.body.startTime;    //开始时间
            Customerdata.endTime = req.body.endTime     //结束时间
            // 保存bear
            Customerdata.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Bear updated!' });
            });
        });
    } 


exports.deleteCustomerid = function(req, res) {
        Customer.remove({
            _id: req.params.cus_id
        }, function(err, users) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    }       