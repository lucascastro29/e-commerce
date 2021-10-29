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
function flags() {
    if ( document.getElementById("Nombre").innerHTML===''&&document.getElementById("Apellido").innerHTML===''&&document.getElementById("Edad").innerHTML===''&&
    document.getElementById("Edad").innerHTML===''&&document.getElementById("Teléfono").innerHTML==='' ) {

    localStorage.setItem('datos',JSON.stringify(objeto)) }
    
}

function datoscargar(array) {
    document.getElementById("Nombre").innerHTML=array.nombre
    document.getElementById("Apellido").innerHTML=array.Apellido
    document.getElementById("Edad").innerHTML=array.Edad
    document.getElementById("Teléfono").innerHTML=array.Telefono
    document.getElementById("Email").innerHTML=array.Email

  let flag={
     'flag':'true',
 }
    localStorage.setItem('flag',JSON.stringify(flag))
    
}


document.addEventListener("DOMContentLoaded", function (e) {
    flags()
});

function guardar(array) {

    array.nombre=document.getElementById("exampleInput1").value
    array.Apellido=document.getElementById("exampleInput2").value
    array.Edad=document.getElementById("exampleInput3").value
    array.Telefono=document.getElementById("exampleInput4").value
    array.Email=document.getElementById("exampleInputEmail1").value
    array.Contraseña=document.getElementById("exampleInputPassword1").value

    localStorage.setItem('datos',JSON.stringify(array))
}

document.getElementById("guardar").addEventListener("click",function () {
    guardar(JSON.parse(localStorage.getItem('data')))
    datoscargar(JSON.parse(localStorage.getItem('data')))
    }



)