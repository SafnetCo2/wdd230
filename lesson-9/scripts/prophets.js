const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// async function getProphets(){
//     const response = await fetch(requestURL);
//     const data =await response.json();
//     // console.log(prophets);
//     // return prophets
//     data.prophets.forEach(prophet => { 
//         displayProphets(prophet)
//     });
    
//     }
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => displayProphets(prophet));
  });

  function nth(n) {
    return ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th';
  }


function displayProphets(prophet) {

        

    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dateOfBirth=document.createElement('p');
    let placeOfBirth=document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dateOfBirth.textContent =`Date of birth ${prophet.birthdate}`
    placeOfBirth.textContent =`place of birth : ${prophet.birthplace}`
   
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt',
    ` Portrait of  ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dateOfBirth)
    card.appendChild(placeOfBirth)
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
    // card.appendChild(card)
    // });
}

// const data = getProphets();
// displayProphets(data.prophets)
// getProphets();
// displayProphets(data);


