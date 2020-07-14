import gql from 'graphql-tag';
import app from '@/main.ts'
console.log( app)
export  const getHomeData = ()=>{
  return   gql`query
  getHomeData{
    user_id
    user_name
    user_author
    user_password
  }
  `;
}
