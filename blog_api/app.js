const express = require('express');
const app = express();
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// 解决跨域
app.use(require('cors')())
// 客户端
// 路由
app.use('/api/s1',require('./routes/client/index.js'))
// 管理系统

app.use('/api/s2',require('./routes/managementSystem/index.js'))
app.listen(7979,()=>{
    console.log('监听 http://127.0.0.1:7979')
})