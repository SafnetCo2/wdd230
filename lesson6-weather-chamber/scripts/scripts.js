function toggleMenu(){
  document.getElementById("primaryN").classList.toggle("open")
  document.getElementById("btn").classList.toggle("open")
}
const x =document.getElementById("btn")
x.onclick=toggleMenu;


//message on wensday

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



//lazy loading
let options={
  root:null,
  rootMargin: "0px",
  threshold:0.5
  }
  //create call back function
  let callback=(entries,observer) =>{
      entries.forEach(entry => {
          if(entry.isIntersecting && entry.target.className==="image"){

              let imageUrl =entry.target.getAttribute("data-src");
              if(imageUrl){
                  entry.target.src=imageUrl;
                  observer.unobserver(entry.target)
              }
          }
          
      });
      
  }
  let observer = new IntersectionObserver(callback,options)
      observer.observe(document.querySelector("#image1"))
      observer.observe(document.querySelector("#image2"))
      observer.observe(document.querySelector("#image3"))
      observer.observe(document.querySelector("#image4"))
      observer.observe(document.querySelector("#image5"))
      observer.observe(document.querySelector("#image6"))











  //number of visits


  const visitsDisplay = document.querySelector(".visits");

  // get the stored value in localStorage
  let numberVisitsString = localStorage.getItem("visits-ls");
  
  if( numberVisitsString==undefined){
    visitsDisplay.textContent = `This is your first visit!`;
    localStorage.setItem("visits-ls", "1");
    
  } 
  else{
    let numVisits = Number(numberVisitsString);
    numVisits++;
    // store the new number of visits value
    localStorage.setItem("visits-ls", numVisits);
    visitsDisplay.textContent = "Your a lucky visitor number: "+ numVisits;
  
  }
  
  
  
  


  










//footer last updated
  document.querySelector(
	"#Last-updated"
).textContent = `Last-updated: ${document.lastModified}`;
