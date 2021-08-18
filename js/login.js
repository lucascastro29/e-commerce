//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("submitb").addEventListener("click",function(e){
    
    let inputEmail=document.getElementById("Email");
    let inputPassword=Document.getElementById("password");

    if(inputEmail.value===true && inputPassword.value===true){ 
    window.location.href= "index.html";
    }
})
});
