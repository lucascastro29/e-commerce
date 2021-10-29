//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var objeto={'nombre':'',
'Apellido':'',
'Edad':'',
'Telefono':'',
'Email':'',
'Contraseña':'',

}

localStorage.setItem('data',JSON.stringify(objeto))

function datoscargar(array) {
    document.getElementById("Nombre").innerHTML=array.nombre
    document.getElementById("Apellido").innerHTML=array.Apellido
    document.getElementById("Edad").innerHTML=array.Edad
    document.getElementById("Teléfono").innerHTML=array.Telefono
    document.getElementById("Email").innerHTML=array.Email

    
}


document.addEventListener("DOMContentLoaded", function (e) {
 

        
});


document.getElementById("guardar").addEventListener("click",function () {

JSON.parse(localStorage.getItem('data')).nombre=document.getElementById("exampleInput1").value


JSON.parse(localStorage.getItem('data')).Apellido=document.getElementById("exampleInput2").value
    
JSON.parse(localStorage.getItem('data')).Edad=document.getElementById("exampleInput3").value

JSON.parse(localStorage.getItem('data')).Telefono=document.getElementById("exampleInput4").value

JSON.parse(localStorage.getItem('data')).Email=document.getElementById("exampleInputEmail1").value

JSON.parse(localStorage.getItem('data')).Contraseña=document.getElementById("exampleInputPassword1").value
        
datoscargar(JSON.parse(localStorage.getItem('data')))

    }



)