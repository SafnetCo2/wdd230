//windchill
//input: get the temperature and speed
//process: compute for windchill factor
//output:display result to the user
let temperature =50;
let windspeed=4;

if (temperature<=50 &&  windspeed > 3){
    //Calculate the wind chill
    let chillFactor = 35.74 + (0.6215 * temperature) - Math.pow((35.75*windspeed),.16) +Math.pow((.4275*temperature*windspeed),.16) ;
    document.getElementById("windchill").innerHTML =chillFactor.toFixed(2) + " km/h";

}
else{
    //display N/A
    document.getElementById("windchill").innerHTML = "N/A";
}




