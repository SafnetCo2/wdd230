function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle("open")
    document.getElementById('hamburgerBtn').classList.toggle("open")
}
const x =document.getElementById("hamburgerBtn")

x.onclick= toggleMenu;

// Date
// const d= new Date();
// document.getElementById("date-time").innerHTML=d;
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
// const dt=new Date();
// document.getElementById("date-time").innerHTML=dt+"/";

var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

document.getElementById("date-time").innerHTML=dateTime;

const hero = new Date();
const  day=hero.getDay();
if (day < 1 || day > 2) {
    const x = document.querySelector('.dateT');
    x.remove();
  }
