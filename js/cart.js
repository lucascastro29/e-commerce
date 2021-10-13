//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function showlist(array){
    let contents=``
    for (let i = 0; i < array.length; i++) {
        const element = array[0].articles[i];
        
        contents+=`<div class="row">
        <div class="col-3" style="height:"100px"; "><img src="${element.src}"></div>
        <div class="col-3"><p>${element.name}</p><br><p><strong>${element.currency} ${element.unitCost}</strong></p></div>
        <div class="col-2"><input type="number" value="${element.count}" style="width: 50px; text-align: end;"></div>
        <div class="col-2"><p>${element.cost*element.unitCost}</p></div>
        </div>
        `
        
    }
    document.getElementById("items").innerHTML+=contents
}


document.addEventListener("DOMContentLoaded", function (){
    getJSONData(CART).then(function(result){
      showlist(result.data)        
    })
  })