// create variables holding reference to the cards
//grab the business
//filter the one which have a gold or silver membership
//randomly select 3 business
//display the business/output

// create variables holding reference to the cards
let card_1 = document.getElementById("card-1")
let card_2 = document.getElementById("card-2")
let card_3 = document.getElementById("card-3")


//grab the business
const request ='/wdd230/lesson6-weather-chamber/json/data.json';


fetch(request)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.log(jsonObject);


    const directories = jsonObject['directory'];
    const filteredBusnesses  = directories.filter((business) => business.membership == "Gold" || business.membership == "Silver");

     // get random index value
     const randomIndex1 = Math.floor(Math.random() * filteredBusnesses.length);
     const randomIndex2 = Math.floor(Math.random() * filteredBusnesses.length);
     const randomIndex3 = Math.floor(Math.random() * filteredBusnesses.length);

     // get random item
     const selectedBusiness1 = filteredBusnesses[randomIndex1];
     const selectedBusiness2 = filteredBusnesses[randomIndex2];
     const selectedBusiness3 = filteredBusnesses[randomIndex3];


    card_1.innerHTML= `
        <h3> ${selectedBusiness1.name}</h3>
        
            <img src="${selectedBusiness1.image}" alt="${selectedBusiness1.name}">
            <p>location:${selectedBusiness1.location} </p>
            <p>Phone number :${selectedBusiness1.phone} </p>
    
            <p>Membership : <strong> ${selectedBusiness1.membership}</strong> </p>
            `;
            
            
            
            
        



    card_2.innerHTML=`  
    

        <h3> ${selectedBusiness2.name}</h3>
        
            <img src="${selectedBusiness2.image}" alt="${selectedBusiness2.name}">
            <p>location:${selectedBusiness2.location} </p>
        
       
            <p>Membership : <strong> ${selectedBusiness2.membership}</strong> </p>`;


        
`;



    // card_1.innerHTML = `
    // <div class="spotlight3" id="}>
    //             <h3>${selectedBusiness3.name}</h3>
    //             <div class="tree">
    //                 <img src="${selectedBusiness3.image}" alt="${selectedBusiness3.name}">
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.</p>
                

    //             </div>
    // `


    card_3.innerHTML=`  
    

        <h3> ${selectedBusiness3.name}</h3>
        
            <img src="${selectedBusiness3.image}" alt="${selectedBusiness3.name}">
            <p>location :${selectedBusiness3.location} </p>
        
            <p>Membership : <strong> ${selectedBusiness3.membership}</strong> </p>


        
`





});
