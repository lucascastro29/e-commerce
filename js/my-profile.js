//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var objeto={'nombre':'','Apellido':'','Edad':'','Telefono':'','Email':'','Contraseña':''}
localStorage.setItem('data',JSON.stringify(objeto))



function datoscargar(array) {
    document.getElementById("Nombre").innerHTML=array.nombre
    document.getElementById("Apellido").innerHTML=array.Apellido
    document.getElementById("Edad").innerHTML=array.Edad
    document.getElementById("Teléfono").innerHTML=array.Telefono
    document.getElementById("Email").innerHTML=array.Email

    
}


document.addEventListener("DOMContentLoaded", function (e) {

        datoscargar(JSON.parse(localStorage.getItem('data')))
    

        
});


document.getElementById("guardar").addEventListener("click",function () {

    objeto={'nombre':' '+document.getElementById("exampleInput1").value+'',
    'Apellido':''+document.getElementById("exampleInput2").value+'',
    'Edad':''+document.getElementById("exampleInput3").value+'',
    'Telefono':''+document.getElementById("exampleInput4").value+'',
    'Email':''+document.getElementById("exampleInputEmail1").value+'',
    'Contraseña':''+document.getElementById("exampleInputPassword1").value+'',
    'register':'T'}

    localStorage.setItem('data1',JSON.stringify(objeto))

 datoscargar(JSON.parse(localStorage.getItem('data1')))

})