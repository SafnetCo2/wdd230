// function renderWeather(){
//     console.log(weather)
//     var current_temp =document.querySelector("current_temp")
//     var city=document.createElement('h1')
//     city.textContent=weather.name
//     current_temp.append(city)

// }
// //create p for humidity,wind,decription ,temp
// // fecth weather data for city
// var temp =document.createElement('p');
// temp.textContent =`"Temp:" ${weather.main.temp} F`
// current_temp.append(temp);
// var humidity =document.createElement("p");
// humidity.textContent=`humidity: ${weather.main.humidity} %`
// current_temp.append("p")
// var wind=document.createElement('p');
// wind.textContent=`wind: ${weather.wind.speed} mph `







// function fetchWeather(query){

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbank&units=imperial&appid=431ec2896516f9999a95764a4dee4506';
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// }
// fetchWeather();





// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Get weather data from the API - openweatherMap.org

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbank&units=imperial&appid=431ec2896516f9999a95764a4dee4506';

async function apiFetch() {
    try {
      const response = await fetch(url);//waiting for response to be translated to json format
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();