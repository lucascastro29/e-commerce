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
  if (a===1){ cont="Gratis: 2-4 Dias"
    document.getElementById("envios").innerHTML=cont
  }else{
    cont="Premium: 1 Dia"
    document.getElementById("envios").innerHTML=cont
  }
}
function envio1(a){
  let cont=""
  if (a===1){ cont="Debito: Visa"
    document.getElementById("envios1").innerHTML=cont
  }else{
    cont="Debito: MasterCard"
    document.getElementById("envios1").innerHTML=cont
  }if (a===0){ cont="Efectivo "
  document.getElementById("envios1").innerHTML=cont
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

 