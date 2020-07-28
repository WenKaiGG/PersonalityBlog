const mysql =require("../../db/index")
const jwt =require('jsonwebtoken')
module.exports.login = (req, res) => {
    let data = req.body;
    mysql.query('select * from user where user_name = ? and user_password =?',[data.user_name,data.user_password],(err,result)=>{
        if(err){
            res.json({
                "resultCode":400,
                "error":'用户或密码错误',
            })
        }else{
        if(result.length>0){
            let newResult =JSON.parse(JSON.stringify(result)) ;
            console.log(newResult[0])
           let admin=  req.body;
              admin.user_id=newResult[0].user_id;
         
            jwt.sign(admin,"admin",{ expiresIn: '1day' },(err,token) => {
                if(token){
                res.json({
                    token,
                    "resultCode":200,
                    "data":result,
                    "success":'登陆成功',
                })
                }
               
            })
          
        }
        }
    })
}
module.exports.getinfor=(req,res)=>{
if(req.headers.token){
  const decoded = jwt.verify(req.headers.token,"admin");
  console.log(decoded)
  if(decoded){
    mysql.query('select * from userinfor where user_id=?',decoded.user_id,(error,result)=>{
                   if(error){
                       res.json({
                           "error":error,
                           "code":500
                       })
                   }else if(result.length>0){
                       res.json({
                           "code":200,
                           "data":result,
                       })
                   }
               })
  }

}else{
    res.json({
        "code":401
    })
}
}
module.exports.getAna=(req,res)=>{
if(req.headers.token&& req.body){
  const decoded = jwt.verify(req.headers.token,"admin");
  const currentPage = req.body.currentPage;
  const pageSize = req.body.pageSize
  if(decoded){
   const offset = (currentPage - 1) * pageSize;
    mysql.query("SELECT * FROM ana WHERE user_id = ? LIMIT ?,?",[decoded.user_id,offset,pageSize],(error,result)=>{
                   if(error){
                       console.log(error)
                       res.json({
                           "error":error,
                           "code":500
                       })
                   }else if(result.length>0){
                       mysql.query("select * from ana where user_id=?",decoded.user_id,(err,results)=>{
                           if(err){
                               console.log(err)
                           }else{
                               if(results.length>0){
                                     res.json({
                                     "code":200,
                                     "data":result,
                                     total:results.length
                              })
                               }
                           }
                       })
                       
                   }
               })
  }

}else{
    res.json({
        "code":401
    })
}
}


