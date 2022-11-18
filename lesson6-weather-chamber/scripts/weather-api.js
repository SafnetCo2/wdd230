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



























// // select HTML elements in the document
// const currentTemp = document.querySelector('current-temp');
// const weatherIcon = document.querySelector('weather-icon');
// const captionDesc = document.querySelector('figcaption');
// // let key = 'c92dea3a65e6ebc96bcf770b1c6b553e';
// // let lang = 'en';
// // let units = 'Imperial';
// // let cityId ='2172797';
// // let cityName = 'fairbanks';
// // const url =`//api.openweathermap.org/data/2.5/weather?id=&appid=${key}&units=${units}`;
// const url='//api.openweathermap.org/data/2.5/weather?q=Fairbank&units=imperial&appid=431ec2896516f9999a95764a4dee4506';
// apiFetch(url);

// async function apiFetch(url){
//     // try{
//         const response = await fetch(url);
//         if(response.ok){
//             const weatherData = await response.json();
//             console.log(weatherData);
//             displayResults(weatherData);

//         }else{
//             throw Error(await response.text());
//         }
            
//         // }catch (error){
//         //     console.log(error)
//         // }
//     }
//     function  displayResults(weatherData) {
//         // currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
//          currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
      
//         const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//         const desc = weatherData.weather[0].description;
      
//         weatherIcon.setAttribute('src', iconsrc);
//         weatherIcon.setAttribute('alt', desc);
//         captionDesc.textContent = desc;
//    }

    

        
    
