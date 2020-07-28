const sql = require('../../db/index')
var md5 = require('md5');
module.exports.GetUserInfor=(req,res)=>{
    sql.query('select * from user',(err,result)=>{
        console.log(req.query.user_id)
        if(err){
            res.json({
                "code":400,
                "error":err
            })
        }else{
                let newInfor={}
            if(result.length!==0){
                let userInfor = JSON.parse(JSON.stringify(result))
                let newInfor={}
                console.log(userInfor[0])
                
                newInfor={
                    user_name:userInfor[0].name,
                    user_author:userInfor[0].user_author
                }
              sql.query('select * from user_infor where user_id =?',userInfor[0].user_id,(error,resultTwo)=>{
                  if(error){
                      res.json({
                            "code":400,
                          "error":error
                      })
                  }else{
                      if(resultTwo.length>0){
                          let NewresultTwo = JSON.parse(JSON.stringify(resultTwo))
                        newInfor={
                            user_infor_occupation:NewresultTwo[0].user_infor_occupation,
                            user_infor_email:NewresultTwo[0].user_infor_email,
                            user_infor_github:NewresultTwo[0].user_infor_github,
                            user_infor_Tel:NewresultTwo[0].user_infor_Tel,
                            user_infor_city:NewresultTwo[0].uuser_infor_city,
                            user_infor_presentation:NewresultTwo[0].user_infor_presentation,
                        }
                        res.json({
                            code:200,
                            data:newInfor
                        })
                      }
                  }
              })
                res.json({
                 "code":200,
                 "data":newInfor
                 
                })
            }
        }
    })
}

module.exports.login=(req,res)=>{
    res.json({
        code:300
    })
}
