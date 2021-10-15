//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function cost(i,unit){
  let cont=document.getElementById('value'+i+'').value;
  document.getElementById('suma'+i+'').value=cont*unit;

}
function total(i){
let sub= document.getElementById('subtotal'+i+'').value
document.getElementById("total").innerHTML+=sub
}

function showlist(array){
    let content=``
    for (let i = 0; i < array.articles.length; i++) {
        let element = array.articles[i];
        
        content+=`<div class="row" style="height:160px; padding:5px; margin:15px;">
        <div class="col-4 imgfather" style="margin:15px;; " ><img src="${element.src}" style=";height:100%;;width:100%;"></div>
        <div class="col-4" stile="height:10px"><p>${element.name}</p><br><p><strong>${element.currency} ${element.unitCost}</strong></p></div>
        <div class="col-2"><input id="value${i}" type="number" value="${element.count}" onchange="cost(${i},${element.unitCost})" style="width: 50px; text-align: end;"></div>
        <div class="col-1"><input type="number" id="suma${i}" value="${element.count*element.unitCost}" style="width: 60px; text-align: end;"></div>
        </div>
        `
        
    }
    document.getElementById("items").innerHTML=content
}


document.addEventListener("DOMContentLoaded", function (){
    getJSONData(CART).then(function(result){
      showlist(result.data)        
    })
  })

 