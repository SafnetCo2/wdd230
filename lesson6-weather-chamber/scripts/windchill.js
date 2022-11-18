//windchill
//input: get the temperature and speed
//process: compute for windchill factor
// //output:display result to the user
// let temperature =50;
// let windspeed=4;

// if (temperature<=50 &&  windspeed > 3){
//     //Calculate the wind chill
//     let chillFactor = 35.74 + (0.6215 * temperature) - Math.pow((35.75*windspeed),.16) +Math.pow((.4275*temperature*windspeed),.16) ;
//     document.getElementById("windchill").innerHTML =chillFactor.toFixed(2) + " km/h";

// }
// else{
//     //display N/A
//     document.getElementById("windchill").innerHTML = "N/A";
// }

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


//Get weather data from the API - openweatherMap.org

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&units=imperial&appid=431ec2896516f9999a95764a4dee4506';


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
    let temperature=weatherData.main.temp;
    let windspeed=weatherData.wind.speed;
        currentTemp.innerHTML = `Temperature: ${temperature} &deg;F`;
       
    
        //  currentTemp.innerHTML = weatherData.div.temp.toFixed(1);
         
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;






       
        if (temperature<=50 &&  windspeed > 3){
            //Calculate the wind chill
            let chillFactor = 35.74 + (0.6215 * temperature) - Math.pow((35.75*windspeed),.16) +Math.pow((.4275*temperature*windspeed),.16) ;
            document.getElementById("windchill").innerHTML =chillFactor.toFixed(2) + " km/h";

        }
        else{
            //display N/A
            document.getElementById("windchill").innerHTML = "N/A";
        }


        document.getElementById("speed").innerHTML=`The speed is: ${windspeed}`;

    }


