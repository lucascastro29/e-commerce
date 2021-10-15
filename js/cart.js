//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function total(){
  let cont=0
for (let i = 0; i < 2; i++) {
  ;
  cont+=parseInt(document.getElementById('suma'+i+'').value);

      
}
document.getElementById('totalv').value=cont;
}
function np() {
  for (let i = 0; i < 2; i++) {
    ;
    cont+=parseInt(document.getElementById('value'+i+'').value);
  
        
  }
  document.getElementById('np').innerHTML=cont;

}
function cost(i,unit){
  let cont=document.getElementById('value'+i+'').value;
  document.getElementById('suma'+i+'').value=cont*unit;
  total()
  np()
}



function showlist(array){
    let content=``
    let sub=0
    for (let i = 0; i < array.articles.length; i++) {
        let element = array.articles[i];
        if (element.currency==='USD') {
          sub=40*element.unitCost
        }else{sub=element.unitCost}

        content+=`<div class="row border rounded" style="height:160px; padding:5px; margin:15px;">
        <div class="col-4 imgfather" style="margin:15px; " ><img src="${element.src}" style=";height:100%;;width:100%;"></div>
        <div class="col-4" stile="height:10px"><p>${element.name}</p><br><p><strong>${element.currency} ${element.unitCost}</strong></p></div>
        <div class="col-1"><input id="value${i}" type="number" value="${element.count}" onchange="cost(${i},${sub})" style="width: 40px; text-align: end;"></div>
        <div class="col-2" style="margin-left:15px;"><input id="suma${i}"  type="text" value="${element.count*sub}"  style="width: 80px; text-align: end; border:none;" /><input type="hidden" value="0"/></div>
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

 