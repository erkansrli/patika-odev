
let username= prompt("Adınız:")
let title=document.querySelector("#myName")
if(username.length>0){

 title.innerHTML=`${username}`

}else{

    username=prompt("Adınızı girmediniz, Lütfen girin: ")
    title.innerHTML=`${username}`
}
let clock= document.querySelector("#myClock")

let today = new Date();
let time = today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds() ;
let date =  today.getDate()+ ":" +(today.getMonth()+1)+":"+  today.getFullYear()
clock.innerHTML= time + " "+date


 