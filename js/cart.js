//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function total(){
  let cont=0
for (let i = 0; i < 2; i++) {
  ;
  cont+=parseInt(document.getElementById('suma'+i+'').innerHTML);

      
}
document.getElementById('totalv').innerHTML=cont;
}
function np() {
  let cont=0
  for (let i = 0; i < 2; i++) {
    
    cont+=parseInt(document.getElementById('value'+i+'').value);

  
        
  }
  document.getElementById("nps").innerHTML=cont;

}
function cost(i,unit){
  let cont=document.getElementById('value'+i+'').value;
  document.getElementById('suma'+i+'').innerHTML=cont*unit;
  total()
  np()
}

function envio(a){
  let cont=""
  if (a===0){ cont="Premium: 2-4 Días"
    document.getElementById("envios").innerHTML=cont
    document.getElementById("totalvo").innerHTML= parseInt(document.getElementById("totalv")) +(15*parseInt(document.getElementById("totalv")))/100
    
  }if (a===2){
    {
      cont="Standard: 12-15 Días"
      document.getElementById("envios").innerHTML=cont
    }
  }else{
    cont="Express: 5-8 Días"
    document.getElementById("envios").innerHTML=cont
  }
  
}
function envio1(a){
  let cont=""
  if (a===1){ cont="Debito: Visa"
    document.getElementById("envios1").innerHTML=cont
    document.getElementById("Tarjeta").innerHTML="Debito:Visa"
    document.getElementById("Modal").innerHTML=`<form>
    <div class="form-group">
      <label for="tar1">Número de tarjeta</label>
      <input type="text" class="form-control" id="tar1"  placeholder="13245677842134563">
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
      <input type="text" class="form-control" id="tar4" placeholder="1020"></div>
      <div class="form-group col-6">
      <label for="tar5">CVC</label>
      <input type="text" class="form-control" id="tar5" placeholder="1234">
    </div></div>
    
  </form>`

  }else{
    cont="Debito: MasterCard"
    document.getElementById("envios1").innerHTML=cont
    
    document.getElementById("Tarjeta").innerHTML="Debito:MasterCard"
    document.getElementById("Modal").innerHTML=`<form>
    <div class="form-group">
      <label for="tar1">Número de tarjeta</label>
      <input type="text" class="form-control" id="tar1"  placeholder="13245677842134563">
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
      <input type="text" class="form-control" id="tar4" placeholder="1020"></div>
      <div class="form-group col-6">
      <label for="tar5">CVC</label>
      <input type="text" class="form-control" id="tar5" placeholder="1234">
    </div></div>
    
  </form>`

  }if (a===0){ cont="Transferencia bancaria"
  document.getElementById("envios1").innerHTML=cont
  
  document.getElementById("Tarjeta").innerHTML="Transferencia Bancaria"
  document.getElementById("Modal").innerHTML=`<form>
  <div class="form-group">
    <label for="tar1">Banco</label>
    <input type="text" class="form-control" id="tar1"  placeholder="">
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
    <input type="text" class="form-control" id="tar4" placeholder=""></div>
    <div class="form-group col-6">
    <label for="tar5">Monto</label>
    <input type="text" class="form-control" id="tar5" placeholder="">
  </div></div>
  
</form>`
  
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


        content+=`<div class="row border rounded" style="height:160px;; margin:10px;padding:5px;">
        <div class="col-4 imgfather"><img src="${element.src}" style=";height:100%;;width:100%;"></div>
        <div class="col-4" style="height:10px"><p>${element.name}</p><br><p><strong>${element.currency} ${element.unitCost}</strong></p></div>
        <div class="col-2"><input id="value${i}" type="number" value="${element.count}" onchange="cost(${i},${sub})" style="width: 40px; text-align: end;margin-left:15px;"></div>
        <div class="col-0" style="width:3px;margin-left:15px;" >$</div>
        <p><div class="col-1"id="suma${i}">${element.count*sub}</div></p></div>
        </div>
        `
        
    }
    document.getElementById("items").innerHTML=content
}


document.addEventListener("DOMContentLoaded", function (){
    getJSONData(CART_INFO_URL).then(function(result){
      showlist(result.data)        
    })
  })

 function miValidacion() {
   flag=true;
   
   
 }