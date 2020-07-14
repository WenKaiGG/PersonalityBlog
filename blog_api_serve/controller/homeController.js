const {buildSchema} =require('graphql');
const { graphqlHTTP } = require('express-graphql');
const msyql = require('../db/index')
// 定义 schema ，查询和类型
const schema = buildSchema(
    `
    type GetHomeData{
        user_id:Int 
        user_name:String,
        user_author:String,
        user_password:String
        
    }
    type GetAna{
        ana_cn:String,
        ana_en:String,
        ana_author:String,
        ana_create_time:String,
        ana_pitchon:String
    }
    type GetWriting{
        article_id:Int,
        article_title:String,
        article_create_time:String,
        ana_id:Int
    }
    type GetUserInfor{
        user_infor_id:Int,
        user_infor_occupation:String,
        user_infor_email:String,
        user_infor_github:String,
        user_infor_Tel:String,
        user_infor_city:String
    }
    type Query{
        hello:String,
        getHomeData:[GetHomeData],
        getAna:GetAna,
        getWriting(num:Int!):[GetWriting],
        getUserInfor:GetUserInfor
    }

    `
)

const root = {
    hello:()=>{
return 'hello'
    },
    getHomeData:()=>{
      return  new Promise((resolve,reject)=>{
            msyql.query('SELECT * FROM users',(err,result)=>{
                if(err){
                   console.log(err.success)
                   return;
                }
               const newRes =JSON.parse(JSON.stringify(result))
               const res=[];
              for(let i = 0; i<newRes.length;i++){  
                res.push({
                    user_id:newRes[i].user_id,
                    user_name:newRes[i].user_name,
                    user_author:newRes[i].user_author,
                    user_password:newRes[i].user_password
                })
               }
            resolve(res)
               
            })

        })
    },
    getAna:()=>{
            return  new Promise((resolve,reject)=>{
                msyql.query("SELECT ana_cn,ana_en,ana_author,ana_create_time,ana_pitchon FROM ana where ana_pitchon ='yes'",(err,result)=>{
                    if(err){
                       console.log(err.success)
                       return;
                    }
                   const newRes =JSON.parse(JSON.stringify(result));
                   const res={
                    ana_cn:newRes[0].ana_cn,
                    ana_en:newRes[0].ana_en,
                    ana_author:newRes[0].ana_author,
                    ana_create_time:newRes[0].ana_create_time,
                    ana_pitchon:newRes[0].ana_pitchon
                };
               
                 resolve(res)
                })
            })
    },
    getWriting:({num})=>{
        return  new Promise((resolve,reject)=>{
            msyql.query(`SELECT article_id,article_title,article_create_time,ana_id FROM article where article_status ='publish' order by article_create_time DESC LIMIT 0,${num}`,(err,result)=>{
                if(err){
                   console.log(err.success)
                   return;
                }
               const newRes =JSON.parse(JSON.stringify(result));
               console.log(newRes)
               const res=[];
               for(let i = 0; i<newRes.length;i++){  
                 res.push({
                    article_id:newRes[i].article_id,
                    article_create_time:newRes[i].article_create_time,
                    ana_id:newRes[i].ana_id,
                    article_title:newRes[i].article_title
                 })
                }
             resolve(res)
            })

        })
    },
    getUserInfor:()=>{
        return  new Promise((resolve,reject)=>{
            msyql.query("SELECT user_infor_id,user_infor_occupation,user_infor_email,user_infor_github,user_infor_Tel,user_infor_city FROM user_infor ",(err,result)=>{
                if(err){
                   console.log(err.success)
                   return;
                }
               const newRes =JSON.parse(JSON.stringify(result));
               const res={
                user_infor_id:newRes[0].user_infor_id,
                user_infor_occupation:newRes[0].user_infor_occupation,
                user_infor_email:newRes[0].user_infor_email,
                user_infor_github:newRes[0].user_infor_github,
                user_infor_Tel:newRes[0].user_infor_Tel,
                user_infor_city:newRes[0].user_infor_city
            };
             resolve(res)
            })

        })
    }
}
module.exports = graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
})
