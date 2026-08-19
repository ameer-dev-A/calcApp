  let btns = document.querySelectorAll("button");
    let dat1= document.querySelector(".dat1");
    let dat2 = document.querySelector(".dat2");
    let Custom = document.getElementById("custom");
    let rest = document.querySelector(".rest");
    let zero = document.querySelector(".zero");

    let res1 = document.querySelector(".res11");
    let res2 = document.querySelector(".res222");

  
    btns.forEach(btn=>{
     btn.addEventListener("click",(e)=>{
        let bill =Number(dat1.value) ;
        let persons =Number(dat2.value) ;
        let tar = parseFloat(e.target.value) /100;
        
        btns.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(persons === 0){
          zero.style.display= "block";
          dat2.style.border = "1px solid red";
          return;
        }

        res1.innerHTML ="$" + (bill * tar / persons).toFixed(2)  ; 
        res2.innerHTML ="$" + (bill +  (bill * tar / persons)).toFixed(2);

     }) 
    })
    
   Custom.addEventListener("input", () => {
        let bill =Number(dat1.value) ;
    let persons =Number(dat2.value) ;
    let cus = Number(Custom.value) / 100;
      
    res1.innerHTML ="$" + (bill*cus / persons).toFixed(2) ;
    res2.innerHTML ="$" + (bill +  (bill * cus / persons)).toFixed(2) ;
   })
         rest.addEventListener("click",()=>{
          location.reload();
         })