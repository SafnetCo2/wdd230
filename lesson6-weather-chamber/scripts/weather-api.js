function toggleMenu(){
  document.getElementById("primaryN").classList.toggle("open")
  document.getElementById("btn").classList.toggle("open")
}
const x =document.getElementById("btn")
x.onclick=toggleMenu;


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

const hero = new Date();
const  day=hero.getDay();
if (day < 1 || day > 2) {
    const x = document.querySelector('.dateT');
    x.remove();
  }
// ---------------------------------weather-api-------------------------------------->

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Get weather data from the API - openweatherMap.org

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbank&units=imperial&appid=431ec2896516f9999a95764a4dee4506';


apiFetch(url);

async function apiFetch() {
    // try {
      const response = await fetch(url);//waiting for response to be translated to json format
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      }else{
          throw Error(await response.text());
      }
    // } catch (error) {
    //     console.log(error);
    // }
  }
  


 function  displayResults(weatherData) {
        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
        //  currentTemp.innerHTML = weatherData.div.temp.toFixed(1);
         
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
      
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;




 }























//footer last updated
document.querySelector(
	"#Last-updated"
).textContent = `Last-updated: ${document.lastModified}`;


        
    
