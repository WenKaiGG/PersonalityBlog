const express = require('express');
const app = express();
// 解决跨域
app.use(require('cors')())
// 路由
app.use('/graphql',require('./controller/homeController.js'))
app.listen(7979,()=>{
    console.log('监听 http://127.0.0.1:7979/graphql')
})