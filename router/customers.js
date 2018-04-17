var Customer = require('../model/Customer')

exports.postCustomer = function(req,res){
    var customer = new Customer()
    customer.name = req.body.name;
    customer.Price =req.body.Price;
    customer.details =req.body.details;
    customer.Customer =req.body.Customer;
    customer.address =req.body.address;
    customer.Telephone =req.body.Telephone;
    customer.MaintenanceTime =req.body.MaintenanceTime;
    customer.CompletionTime =req.body.CompletionTime
    customer.save(function(err){
        if (err)
            res.send(err)
        res.json({message: 'Bear created!'})
    });
}   