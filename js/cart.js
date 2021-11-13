//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let flagp=3

let flagp0
let flagp1
function total(){
  let cont=0
  if (flagp===0) {
    cont=parseInt(document.getElementById("suma1").innerHTML)
    
  }
  if (flagp===1) {
    cont=parseInt(document.getElementById("suma0").innerHTML)
    
  } if(flagp===3){
for (let i = 0; i < 2; i++) {
  ;
  cont+=parseInt(document.getElementById('suma'+i+'').innerHTML);

      
}}
 

document.getElementById('totalv').innerHTML=cont;
}




function np() {
  let cont=0
  if (flagp===3) {
    for (let i = 0; i < 2; i++) {
    
      cont+=parseInt(document.getElementById('value'+i+'').value);
  
    
          
    }
  } if (flagp===0) { cont=parseInt(document.getElementById("value1").value)
    
  } if (flagp===1) { cont=parseInt(document.getElementById("value0").value)
    
  }
  
  document.getElementById("nps").innerHTML=cont;

}

function subto(){
  document.getElementById("totalvo").innerHTML= document.getElementById("totalv").innerHTML
}

function cost(i,unit){
  let cont=document.getElementById('value'+i+'').value;
  document.getElementById('suma'+i+'').innerHTML=cont*unit;
  total()
  np()
  subto()
}

let flag1=0

let flag2=0

let flag3=0

let flag4=0
let flagform  

function envio(a){
  flag1=1
  let cont=""
  if (a===0){ cont="Premium: 2-4 Días(+15% del subtotal)"
    document.getElementById("envios").innerHTML=cont
    document.getElementById("totalvo").innerHTML= parseInt(document.getElementById("totalv").innerHTML) +(15*parseInt(document.getElementById("totalv").innerHTML))/100
    
  }if (a===2){
    {
      cont="Standard: 12-15 Días(+5% del subtotal)"
      document.getElementById("envios").innerHTML=cont
      document.getElementById("totalvo").innerHTML= parseInt(document.getElementById("totalv").innerHTML) +(5*parseInt(document.getElementById("totalv").innerHTML))/100
     

    }
  }if (a===3){
    cont="Express: 5-8 Días(+7% del subtotal)"
    document.getElementById("envios").innerHTML=cont
    document.getElementById("totalvo").innerHTML= parseInt(document.getElementById("totalv").innerHTML) +(7*parseInt(document.getElementById("totalv").innerHTML))/100
    
  }
  
}
function envio1(a){
  let cont=""
  flag2=1

  flagform=0;
  if (a===1){ cont="Debito: Visa"
  
    document.getElementById("envios1").innerHTML=cont
    document.getElementById("Tarjeta").innerHTML="Debito:Visa"
    document.getElementById("Modal").innerHTML=`
    <div class="form-group">
      <label for="tar1">Número de tarjeta</label>
      <input type="tel" role="none" maxlength="16" class="form-control" id="tar1"  placeholder="13245677842134563">
    </div>
    <div class="form-group">
      <label for="tar2">Nombre</label>
      <input type="text" class="form-control" id="tar2" placeholder="Lucas">
    </div>
    <div class="form-group">
      <label for="tar3">Apellido</label>
      <input type="text" class="form-control" id="tar3" placeholder="Dominguez">
    </div>
    <div class="row"><div class="form-group col-6">
      <label for="tar4">Fecha de expiración</label>
      <input type="date" class="form-control" id="tar4" placeholder="1020"></div>
      <div class="form-group col-6">
      <label for="tar5">CVC</label>
      <input type="tel" role="none"  maxlength="4" class="form-control" id="tar5" placeholder="1234">
    </div></div>
    
  `

  }else{
    cont="Debito: MasterCard"
    document.getElementById("envios1").innerHTML=cont
    
    document.getElementById("Tarjeta").innerHTML="Debito:MasterCard"
    document.getElementById("Modal").innerHTML=`
    <div class="form-group">
      <label for="tar1">Número de tarjeta</label>
      <input type="tel" role="none" maxlength="16" class="form-control" id="tar1"  placeholder="13245677842134563">
    </div>
    <div class="form-group">
      <label for="tar2">Nombre</label>
      <input type="text" class="form-control" id="tar2" placeholder="Lucas">
    </div>
    <div class="form-group">
      <label for="tar3">Apellido</label>
      <input type="text" class="form-control" id="tar3" placeholder="Dominguez">
    </div>
    <div class="row"><div class="form-group col-6">
      <label for="tar4">Fecha de expiración</label>
      <input type="date" class="form-control" id="tar4" placeholder="1020"></div>
      <div class="form-group col-6">
      <label for="tar5">CVC</label>
      <input type="tel" role="none" maxlength="4" class="form-control" id="tar5" placeholder="1234">
    </div></div>
    
  `

  }if (a===0){ cont="Transferencia bancaria"
  document.getElementById("envios1").innerHTML=cont
  
  document.getElementById("Tarjeta").innerHTML="Transferencia Bancaria"
  document.getElementById("Modal").innerHTML=`
  <div class="form-group">
    <label for="tar1">Banco</label>
    <input type="text" class="form-control" id="tar1"  placeholder="BROU">
  </div>
  <div class="form-group">
    <label for="tar2">Nombre</label>
    <input type="text" class="form-control" id="tar2" placeholder="Lucas">
  </div>
  <div class="form-group">
    <label for="tar3">Apellido</label>
    <input type="text" class="form-control" id="tar3" placeholder="Dominguez">
  </div>
  <div class="row">
  <div class="form-group col-6">
    <label for="tar4">Numero de cuenta</label>
    <input type="tel" class="form-control" id="tar4" placeholder="12363453"></div>
    <div class="form-group col-6">
    <label for="tar5">Monto</label>
    <input type="tel" role="none" class="form-control" id="tar5" placeholder="$">
  </div></div>
  
`
  
}
}

function deletp(i) {

  if (i===1) {
    flagp1=1
    
  } if (i===0) {flagp0=1
    
  }flagp=i
  document.getElementById("product"+i+"").innerHTML="" 
 
  if (document.getElementById("product0").innerHTML==="" && document.getElementById("product1").innerHTML==="") {
    document.getElementById("nps").innerHTML=0
    document.getElementById("totalv").innerHTML=0
    document.getElementById("totalvo").innerHTML=0

  }
  if (flagp===0) {
    document.getElementById("totalv").innerHTML= parseInt(document.getElementById("suma1").innerHTML)
    document.getElementById("nps").innerHTML= parseInt(document.getElementById("value1").value)
    document.getElementById("totalvo").innerHTML=parseInt(document.getElementById("suma1").innerHTML)
  }if (flagp===1) {
    document.getElementById("totalv").innerHTML= parseInt(document.getElementById("suma0").innerHTML)
    document.getElementById("nps").innerHTML= parseInt(document.getElementById("value0").value)
    document.getElementById("totalvo").innerHTML=parseInt(document.getElementById("suma0").innerHTML)
  }
}


function showlist(array){
    let content=``
    let sub=0
    for (let i = 0; i < array.articles.length; i++) {
        let element = array.articles[i];
        if (element.currency==='USD') {
          sub=40*element.unitCost
        }else{sub=element.unitCost}


        content+=`<div  id="product${i}"><div class="row border rounded" style="height:200px;; margin:10px;padding:5px;" id="producto${i}">
        <div class="col-4 imgfather"><img src="${element.src}" style=";height:100%;;width:100%;"></div>
        <div class="col-4" style="height:10px"><p>${element.name}</p><br><p><strong>${element.currency} ${element.unitCost}</strong></p></div>
        <div class="col-2"><input id="value${i}" type="number" value="${element.count}" onchange="cost(${i},${sub})" style="width: 40px; text-align: end;margin-left:15px;"></div>
        <div class="col-0" style="width:3px;margin-left:15px;" >$</div>
        <p><div class="col-1"id="suma${i}">${element.count*sub}</div></p>
        <div class="col-0 imgfather" style="height:40px;width:40px;"><img src="https://cdn-icons-png.flaticon.com/512/58/58326.png" style="height:100%;width:100%; margin-left:5px" onclick="deletp(${i})"></div>

        </div></div>
        `
        
    }
    document.getElementById("items").innerHTML=content
}


document.addEventListener("DOMContentLoaded", function (){
    getJSONData(CART_INFO_URL).then(function(result){
      showlist(result.data)        

      document.getElementById("nps").innerHTML= parseInt(document.getElementById("value0").value)+parseInt(document.getElementById("value1").value) 
      document.getElementById("totalv").innerHTML= parseInt(document.getElementById("suma0").innerHTML)+parseInt(document.getElementById("suma1").innerHTML) 

    })
  })


  




function miValidacion() {

  if (flag1===0) {let content=`-Debes seleccionar un tipo de envio<br>`
    document.getElementById("validationtext").innerHTML+=content
  }
  if (flag2===0) {
    let content=`-Debes seleccionar un medio de Pago<br>`
    document.getElementById("validationtext").innerHTML+=content
  }
  if (flag3===0) {let content=`-Falta ingresar su Dirección<br>`
  document.getElementById("validationtext").innerHTML+=content
  }  
  if (flag4===0) {let content=`-Falta ingresar su País<br>`
  document.getElementById("validationtext").innerHTML+=content
  }  

  if( document.getElementById("tar1").value!="" && document.getElementById("tar2").value!="" && document.getElementById("tar3").value!=""
  && document.getElementById("tar4").value!="" && document.getElementById("tar5").value!=""){ flagform=1}

  if (flagform===0) {let content=`-Debes completar tu información de Medio de Pago<br>`
  document.getElementById("validationtext").innerHTML+=content
    
  }
  if(flag1!=0 && flag2!=0 && flag3!=0 && flag4!=0 && flagform!=0){
    let content=` -Compra Exitosa`
    document.getElementById("validationtextT").innerHTML=content

  }
  
   }


 document.getElementById("btncomprar").addEventListener("click",function() {
   if (document.getElementById("dir1").value!="") {flag3=1
     
   }
   if (document.getElementById("dir2").value!="") {flag4=1
     
   }

  miValidacion()

  
 })