
//menu button
const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarlinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click',()=> {
  navbarlinks.classList.toggle('hide')
})









let fruits = [];


//create variables
const fruitList1=document.getElementById('option1')
const fruitList2=document.getElementById('option2')
const fruitList3=document.getElementById('option3')
let count = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
document.getElementById("count").innerHTML = count;


const request = "json/data.json"

const form =document.getElementById('get-form')
if(form) {
  form.addEventListener('submit', handleFormSubmit )
  fetch(request)
  .then(function(response){
    return response.json();
  })
  .then(function(fruitList){ 
    fruits = fruitList;
    fruitList.forEach(fruit => {
      fruitList1.innerHTML += `<option value=${fruit.name}>${fruit.name}</option>`;
      fruitList2.innerHTML += `<option value=${fruit.name}>${fruit.name}</option>`;
      fruitList3.innerHTML += `<option value=${fruit.name}>${fruit.name}</option>`;
    });
  })
  
}


function handleFormSubmit(event){
  event.preventDefault();
  //Display results bellow the submit 
    //Display the date
    const dates = new Date();
    document.getElementById('getDate').innerHTML =dates;

    //Display user information (Name, phone, email) 
    let name =document.getElementById('fname').value;
    let email =document.getElementById('email').value;
    let tel =document.getElementById('phone').value;
    let fruits_1 =document.getElementById('option1').value;
    let fruits_2 =document.getElementById('option2').value;
    let fruits_3 =document.getElementById('option3').value;
    let comment =document.getElementById('commentsBox').value;

    let count = 0;
    if(localStorage.getItem('count')){
      count =parseInt(localStorage.getItem('count'));  //2
    }
    count += 1; 

    localStorage.setItem("count", count);
  

    //Display Nutritional informa
    document.getElementById('fruits-1').innerHTML=fruits_1
    document.getElementById('fruits-2').innerHTML=fruits_2
    document.getElementById('fruits-3').innerHTML=fruits_3
    document.getElementById('displayComment').innerHTML=comment
    document.getElementById('count').innerHTML= count

    let fruit1_info = fruits.filter(fruitInfo => fruitInfo.name == fruits_1)[0];
    let fruit2_info = fruits.filter(fruitInfo => fruitInfo.name == fruits_2)[0];
    let fruit3_info = fruits.filter(fruitInfo => fruitInfo.name == fruits_3)[0];

    document.getElementById('counts').innerHTML= count;
    document.getElementById('displayName').innerHTML=name;
    document.getElementById('emails').innerHTML= email;
    document.getElementById('number').innerHTML= tel;



      //Grab the information for each fruit
      //Display carbohydrates, protein, fat, sugar, and calories
       const  carbohydrates = (fruit1_info.nutritions.carbohydrates +  fruit2_info.nutritions.carbohydrates +  fruit3_info.nutritions.carbohydrates).toFixed(2)
      const  protein = (fruit1_info.nutritions.protein +  fruit2_info.nutritions.protein+  fruit3_info.nutritions.protein).toFixed(2)
      const  fat= fruit1_info.nutritions.fat +  fruit2_info.nutritions.fat +  fruit3_info.nutritions.fat.toFixed(2)
       const  sugar = fruit1_info.nutritions.sugar +  fruit2_info.nutritions.sugar+  fruit3_info.nutritions.sugar.toFixed(2)
       const  calories = fruit1_info.nutritions.calories +  fruit2_info.nutritions.calories +  fruit3_info.nutritions.calories.toFixed(2)
  //Record a new submission on local storage 
       document.getElementById('carbohydrate').innerHTML= `carbohydrates: ${carbohydrates}`
       document.getElementById('protein').innerHTML= `protein: ${protein}`
       document.getElementById('fat').innerHTML=`fat: ${fat}`;
       document.getElementById('sugar').innerHTML= `sugar: ${sugar}`
     document.getElementById('calories').innerHTML=`calories: ${calories}`;
 

    }
    // use the ids in form
    

    //declare variables for html
    //save 
    //add fuctionality to save ids
    


//slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}









  //footer last updated
  document.querySelector(
    "#Last-updated"
).textContent = `Last-updated: ${document.lastModified}`;