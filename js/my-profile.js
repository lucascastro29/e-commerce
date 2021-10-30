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

function datoscargar(array) {
    document.getElementById("Nombre").innerHTML=array.nombre
    document.getElementById("Apellido").innerHTML=array.Apellido
    document.getElementById("Edad").innerHTML=array.Edad
    document.getElementById("Teléfono").innerHTML=array.Telefono
    document.getElementById("Email").innerHTML=array.Email

  
}

function guardar(array) {

    array.nombre=document.getElementById("exampleInput1").value
    array.Apellido=document.getElementById("exampleInput2").value
    array.Edad=document.getElementById("exampleInput3").value
    array.Telefono=document.getElementById("exampleInput4").value
    array.Email=document.getElementById("exampleInputEmail1").value
    array.Contraseña=document.getElementById("exampleInputPassword1").value

    localStorage.setItem('datos',JSON.stringify(array))
}



document.addEventListener("DOMContentLoaded", function () {
    if ( !JSON.parse(localStorage.getItem('datos'))) {
        localStorage.setItem("datos",JSON.stringify(objeto))
    }else{
        datoscargar(JSON.parse(localStorage.getItem('datos')))

    }
});



document.getElementById("guardar").addEventListener("click",function () {

    guardar(JSON.parse(localStorage.getItem('datos')))
    datoscargar(JSON.parse(localStorage.getItem('datos')))
    

}

)