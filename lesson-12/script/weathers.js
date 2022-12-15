
  
function getInfo(){
    const newName =document.getElementById('cityInput');

    const cityName =document.getElementById('cityName')

    cityName.innerHTML ="--"+newName.value+"--"

fetch("https://api.openweathermap.org/data/2.5/forecast?q=California&appid=431ec2896516f9999a95764a4dee4506")
.then(response =>response.json())
.then(data =>{
    for(i=0;i<3; i++){
        document.getElementById("day"+(i+1)+"Min").innerHTML="Min:"+Number(data.list[i].main.temp_min-277.35).toFixed(1)+"°";
    }
    for(i=0;i<3; i++){
        document.getElementById("day"+(i+1)+"Max").innerHTML="Max:"+Number(data.list[i].main.temp_max-278.92).toFixed(1)+"°";
    }

    for(i=0;i<3;i++){
    
        document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png";
    }
    for(i=0;i<3;i++){
        document.getElementById("humidity").innerHTML="humidity:"+(data.list[i].main.humidity);
        
    }

    
})
    // .catch(err => alert("display none incase of an error"))

}
function DefaultScreen(){
    document.getElementById('cityInput').defaultValue="california";
    getInfo();
}
const d = new Date();
const weekday =["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","Satuday"]
function checkDay(day){
    if(day + d.getDay() > 3){
        return day + d.getDay()-4;
    }
    else{
        return day +d.getDay();
    }

}
for(i=0;i<3;i++){
    document.getElementById('day'+(i+1)).innerHTML=weekday[checkDay(i)];
}





  //footer last updated
  document.querySelector(
    "#Last-updated"
).textContent = `Last-updated: ${document.lastModified}`;












