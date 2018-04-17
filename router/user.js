
var Users = require('../model/user')

exports.getUsers = function(req, res) {
        Users.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    }
exports.postUsers = function(req,res){
    var user = new Users()
    user.name = req.body.name;
    user.password = req.body.password
    user.save(function(err){
        if (err)
            res.send(err)
        res.json({message: 'Bear created!'})
    });
}    

exports.getUsersid =function(req, res) {
        Users.findById(req.params.user_id, function(err, users) {
            if (err)
                res.send(err);
            res.json(users);
        });
    } 

exports.putUsersid = function(req, res) {
        // 通过bear modle查询一条bear
        Users.findById(req.params.user_id, function(err, users) {
            if (err)
                res.send(err);
            users.name = req.body.name;  // update the bears info
            users.password = req.body.password
            // 保存bear
            users.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Bear updated!' });
            });
        });
    }    

exports.deleteUsersid = function(req, res) {
        Users.remove({
            _id: req.params.user_id
        }, function(err, users) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    }    