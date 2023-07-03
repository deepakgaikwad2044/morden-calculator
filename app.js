     
     const radio = document.getElementsByName("operator");
     
     const radio1 = document.querySelectorAll(".radiobtn")[0]
         if(radio1.checked){
       
 document.querySelector(".bold").innerHTML = radio1.value;
         }  
     
     
      for(let i= 0; i<radio.length; i++){
     
     radio[i].onclick = ()=>{
         
         if(radio[i].checked){
       
 document.querySelector(".bold").innerHTML = radio[i].value;
         }
     
     
     
         
     }
     
     
     
     } 
 
       
       let btn = document.querySelector("button");
      
      let form = document.querySelector("form");

    
 
      form.onsubmit = function(e){
         e.preventDefault();
         form.reset();
      }
      
       
       btn.onclick = (e)=>{
        
 
         
            
             let num1 = document.querySelector(".num1");
       let num2 = document.querySelector(".num2");
       let errorText = document.querySelector(".error");
        
               
    function div(a, b){
        
        
        
      return new Promise(function(resolve, reject){
       
          
     if((num1.value != '') && (num2.value != "")){   
         errorText.innerHTML = " <i class='fas fa-circle-check yello'></i> calculate please wait.." ;
        errorText.style.display="block";
        
     let check = document.querySelector(".bold").innerHTML;
     
 if(check.includes("sum")){
     var  c = (+a) + (+b);
     var opr = "a+b = c";
 }else if(check.includes("sub")){
     var  c = a-b;
     var opr = " a-b = c";
 }else if(check.includes("mult")){
     var  c = a*b;
     var opr = " a*b = c";
} else{
     var  c = a/b;
     var opr = "a/b = c ";
}


      setTimeout(()=>{
          
          
      if((a!=0  && b!=0)){
     resolve(` Your value a= ${a}                value b = ${b} <br> ${opr}   <br>
                 Your answer: ${c}`);
 }else{
     reject(" <i class='fas fa-close'> failed to calculate </i>");
        }
        
      }, 3000);
      
     }
           });
          
        
          }
    
div(num1.value, num2.value).then((result)=>{
       let resultdiv = document.querySelector(".resultdiv");
       
     errorText.innerHTML =`<i class='fas fa-circle-check' > </i>  ${result}`;
     
 }).catch((error)=>{
          
       let resultdiv = document.querySelector(".resultdiv");
     resultdiv.classList.remove("show");
        
      errorText.innerHTML =error;
      
     
      });    
    
     }
         
        

        const bars = document.querySelector(".fa-bars");
        
        const menu = document.querySelector(".menu");
        
        const about = document.querySelector(".about");
        
        bars.onclick = ()=>{
            menu.classList.toggle("menuonoff");
menu.classList.toggle("shado3");
     
        }
        
        const aboutapp = document.querySelector(".aboutapp");
        
    aboutapp.onclick = ()=>{
        about.classList.toggle("show");
    }
    const aboutbars = document.querySelector(".aboutbars");
    
    aboutbars.onclick = ()=>{
        about.classList.toggle("show");
        
    }
    
const contact = document.querySelector(".contact");
    const contactbars = document.querySelector(".contactbars");
  const Developercheck = document.querySelector(".Developercheck");
  
  Developercheck.onclick =()=>{
      contact.classList.toggle("show");
  }
  
    contactbars.onclick = ()=>{
        contact.classList.toggle("show");
    }
  
  
  
  
  const facebooklink = document.querySelector(".fa-facebook");
    
    facebooklink.onclick= function(){
    window.location = 
"https://www.facebook.com/profile.php?id=100015276005519";
    }
    
    
    const insta = document.
    querySelector(".fa-instagram");
    
    insta.onclick = function(){
        window.location = 
        
"https://www.instagram.com/p/CimSXREryZ4/?igshid=YmMyMTA2M2Y=";
   
    } 
   