var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router()

var Users = require('./router/user')
var Customer = require('./router/customers')

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())



var port = process.env.PORT || 8080;

// 任何路由的每次request都执行
router.use(function(req, res, next) {
    // 打印
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  //res.header("X-Powered-By",' 3.2.1')
     res.header("Content-Type", "application/json;charset=utf-8");

    console.log('Something is happening.');
    next(); // 在这里会将request交给下一个中间件，如果这个中间件后面没有其他中间件，请求会交给匹配的路由作处理
});

// 用这个路由来做简单的测试(用get动词访问 http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

//用户名
router.route('/users').get(Users.getUsers);

router.route('/users').post(Users.postUsers);

// 匹配 /users/:bear_id 的路由
router.route('/users/:user_id').get(Users.getUsersid);

// 根据id获取指定的bear (GET 请求 http://localhost:8080/api/users/:bear_id)

router.route('/users/:user_id').put(Users.putUsersid);

// 通过id删除一条bear (DELETE 访问 http://localhost:8080/api/users/:user_id)应用
router.route('/users/:user_id').delete(Users.deleteUsersid);

//客户维护
router.route('/Customer').get(Customer.getCustomer);

router.route('/Customer').post(Customer.postCustomer);

router.route('/Customer/:cus_id').get(Customer.getCustomerid);

router.route('/Customer/:cus_id').put(Customer.putCustomerid);
router.route('/Customer/:cus_id').delete(Customer.deleteCustomerid);

//注册路由
//所有路由加上'/api'
app.use('/api' , router)


app.listen(port)
console.log('Magic happens on port ' + port)