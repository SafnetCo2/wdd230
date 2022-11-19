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
  
  
  
  
  
  
  
  
  
  
  
  
   
    
    
  
  
    
  
  
  
  
  
  
  
  
  
  
  //footer last updated
    document.querySelector(
      "#Last-updated"
  ).textContent = `Last-updated: ${document.lastModified}`;
  