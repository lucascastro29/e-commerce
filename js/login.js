//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.getElementById('form').addEventListener('submit',function(){
localStorage.clear()
    var inputEmail= document.getElementById("Email").value
localStorage.setItem("email",inputEmail)
})

