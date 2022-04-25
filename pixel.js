const express = require('express');

const { sequelize } = require('./models');
const indexRouter = require('./routes');
const usersRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3001);
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
  
app.use('/', indexRouter);
app.use('/user', usersRouter);

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });

/*
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.get(`/`, (req, res) => {
    console.log(req.query);
    res.send({"result": "GET 호출"});
  })
  
  app.post(`/`, (req, res) => {
    console.log(req.body);
    res.send({"result": "POST 호출"});
  })
  
  app.put(`/:id`, (req, res) => {
    console.log(`내용 PrimaryKey : ${req.params.id}`)
    console.log(req.body);
    res.send({"result": "UPDATE 호출"});
  })
  
  app.delete(`/:id`, (req, res) => {
    console.log(req.params.id);
    console.log(req.path)
    res.send({"result": "DELETE 호출"});
  })
*/

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
  