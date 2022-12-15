// ---------------------------------weather-api-------------------------------------->












// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidityIcon = document.querySelector('#humidity');
const captionDesc = document.querySelector('figcaption');

//Get weather data from the API - openweatherMap.org
//  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbank&units=imperial&appid=431ec2896516f9999a95764a4dee4506';

// const url = 'https://api.openweathermap.org/data/2.5/forecast/hourly?q=California&units=imperial&appid=578747b96d92262f8497ee80464d3eee';
 const url ='https://api.openweathermap.org/data/2.5/forecast?q=California&units=imperial&appid';


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
         
    



 }

