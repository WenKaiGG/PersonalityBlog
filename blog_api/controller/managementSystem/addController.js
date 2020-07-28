const mysql =require("../../db/index")
const jwt =require('jsonwebtoken')

module.exports.addAna = (req,res)=>{
    let  userData=req.body.data
    if(req.headers.token&& req.body.data){
        const decoded = jwt.verify(req.headers.token,"admin");
            if(decoded){
                let timeData= new Date()
                mysql.query("INSERT INTO ana(Ana_cn,Ana_en,Ana_author,Ana_create_time,user_id) VALUES(?,?,?,?,?)",[userData.Ana_cn,userData.Ana_en,userData.Ana_author,timeData,decoded.user_id],(error,result)=>{
                    if(error){
                        console.log(error)
                        res.json({
                            "code":400,
                            "success":"添加失败!"
                        })
                    }else{
                       res.json({
                           "code":200,
                           "success":"添加成功!"
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
module.exports.putAna = (req,res)=>{
    let  userData=req.body.data
    if(req.body.data){
                let timeData= new Date()
                mysql.query("update Ana set Ana_cn=?,Ana_en=?,Ana_author=?,Ana_update_time=? where Ana_id=?",[userData.Ana_cn,userData.Ana_en,userData.Ana_author,timeData,userData.Ana_id],(error,result)=>{
                    if(error){
                        console.log(error)
                        res.json({
                            "code":400,
                            "success":"添加失败!"
                        })
                    }else{
                        res.json({
                            "code":200,
                            "success":"修改成功!"
                        })
                        }
                
                }) 
            }
      
}
module.exports.delAna = (req,res)=>{
    console.log(req.params.id)
    if(req.params.id){
          mysql.query('DELETE FROM Ana WHERE Ana_id = ?',req.params.id,(error,result)=>{
            if(error){
                console.log(error)
                res.json({
                    "code":400,
                    "success":"添加失败!"
                })
            }else{
                res.json({
                    "code":200,
                    "success":"删除成功!"
                })
                }
          })
              
            }
      
}
