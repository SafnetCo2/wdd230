//get date and time 

var today = new Date();
var date=today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+ time;

document.getElementById("date-time").innerHTML=dateTime;