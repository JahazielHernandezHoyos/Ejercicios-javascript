let inactividad = true;
let time = 3000;

setTimeout(function(){
    if (inactividad == false){
       inactividad = true 
       clearTimeout()
    } else {
    alert("hola soy truco vicio");
    }
}, time);  

function bancoDetector(){
    inactividad = false
    time = 3000  
}


