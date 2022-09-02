
import axios from "axios";

export  default async function Know(y){
 const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${y}`)
 const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${y}`)
 console.log(user)
 console.log(post)
}

