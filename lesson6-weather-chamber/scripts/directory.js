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
  
  // ------------------------------------------------fetch api and json--------------------------------------------------------

// /wdd230/lesson6-weather-chamber/json/data.json
const request = '/wdd230/lesson6-weather-chamber/json/data.json';
// const requestURL ='ww/lesson6-weather-chamber/json/data.json';
const cards = document.querySelector('.cards-b');
    
    fetch(request)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.log(jsonObject); // temporary checking for valid response and data parsing
        const directories = jsonObject['directory'];
        directories.forEach((directory) => displayDirectories(directory));
        directories.forEach((directory) => displayTable(directory));
      });

    
    
     function displayDirectories(directory) {
    
            
    
        // Create elements to add to the document
        let card = document.createElement('section');
        let h2=document.createElement('h2')
        let image = document.createElement('img');
    
        let name=document.createElement('p');
        let location=document.createElement('p');

        let phone= document.createElement('p');
        let website= document.createElement('a');

   
      
        // Change the textContent property of the h2 element to contain the prophet's full name
    
        h2.textContent = `${directory.name}`;
        // name.textContent = `${directory.name} `;
        location.textContent =`${directory.location}`

   
        phone.textContent=`Contacts: ${directory.phone}`
    
        website.textContent=`${directory.website}`
       
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
       

    
    


        image.setAttribute('loading', 'lazy');
        image.setAttribute('src', directory.image)
        website.setAttribute('href',directory.website);
      

        // Add/append the section(card) with the h2 element
        card.appendChild(image)
        card.appendChild(h2);
        card.appendChild(name)
        card.appendChild(location)
   
        card.appendChild(phone)
        card.appendChild(website)
      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards-b').appendChild(card);
        // card.appendChild(card)
        // });
    }
    
    // const data = getProphets();
    // displayProphets(data.prophets)
    // getProphets();
    // displayProphets(data);
    
    

    //table
    function displayTable(directory) {
  
    // Create elements to add to the document
    let table_row = document.createElement('tr');
    let td1 = document.createElement('td')

    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');

    let website =  document.createElement('a');



    // Change the textContent property of the h2 element to contain the prophet's full name

    td1.textContent = directory.name;
    // name.textContent = `${directory.name} `;
    td2.textContent =directory.location;

    td3.textContent=`Contacts: ${directory.phone}`


    website.textContent = `${directory.website}`
   website.setAttribute('href',directory.website);

    td4.appendChild(website)

 
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with    the appropriate variable).


    // Add/append the section(card) with the h2 element
    table_row.appendChild(td1)
    table_row.appendChild(td2)
    table_row.appendChild(td3)
    table_row.appendChild(td4)


     // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('.table-directory').appendChild(table_row);

    }


    //button 

      const gridbutton = document.querySelector("#grid");
      const listbutton = document.querySelector("#list");
      const display = document.querySelector("article");
      const cards_b = document.querySelector(".cards-b");
      const table_directory = document.querySelector(".table-directory");

    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

    gridbutton.addEventListener("click", () => {
      cards_b.classList.remove("hidden");
      table_directory.classList.add("hidden")
    });

    listbutton.addEventListener("click", () => {
    table_directory.classList.remove("hidden");
    cards_b.classList.add("hidden")
  });// example using defined function


    document.querySelector(
      "#Last-updated"
    ).textContent = `Last-updated: ${document.lastModified}`;


    //
