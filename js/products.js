
var minp=undefined;
var maxp=undefined;
var buscar=undefined;


function showproducts(array){
    let content=''

    array.forEach(element => {

      if(((minp==undefined)||element.cost>=minp)&&
      ((maxp==undefined)||element.cost<=maxp)){

        if (buscar==undefined||element.name.toLowerCase().includes(buscar)||element.description.toLowerCase().includes(buscar)){

          content +='<div>'
        content +='<img src="'+element.imgSrc+'" alt=""></img><br>'
        content +='Nombre: '+ element.name+'<br>';
        content +='Precio: '+ element.currency+element.cost+'<br>';
        content +='vendidos: '+element.soldCount+'<br>';
        content +="Descripción: "+element.description+'<br>';
        content +='</div>';
    
        }}
  
    });
    document.getElementById("mainproducts").innerHTML=content;
}

  document.addEventListener("DOMContentLoaded", function (e) {
     getJSONData(PRODUCTS_URL).then(function(result){
         if(result.status==="ok"){
             showproducts(result.data)
         }
     });
    
  })

  function sortproducts(criterio,array){
    let result=[];
    if(criterio===1){
      result=array.sort(function(a,b){
        if(a.cost<b.cost){return-1}
      if(a.cost>b.cost){return 1}
      return 0;
    });
  }else if(criterio===2){
      result=array.sort(function(a,b){
        if(a.cost>b.cost){return-1}
      if(a.cost<b.cost){return 1}
      return 0;
    })
  }else if(criterio===3){
    result=array.sort(function(a,b){
      if(a.soldCount>b.soldCount){return-1}
      if(a.soldCount<b.soldCount){return 1}
      return 0;
    });
  }
    return result;
  
  }

document.getElementById('Descendente').addEventListener('click',function(e){
getJSONData(PRODUCTS_URL).then(function(result){
  
    let productos=sortproducts(1,result.data);
    showproducts(productos)
})

})
document.getElementById('Ascendente').addEventListener('click',function(e){
  getJSONData(PRODUCTS_URL).then(function(result){
    
      let productos=sortproducts(2,result.data);
      showproducts(productos)
  })
  
  })
  document.getElementById('Relevancia').addEventListener('click',function(e){
    getJSONData(PRODUCTS_URL).then(function(result){
      
        let productos=sortproducts(3,result.data);
        showproducts(productos)
    })
    
    })
  
document.getElementById('filtro').addEventListener('click',function(){
  minp=document.getElementById('minimo').value;
  maxp=document.getElementById('maximo').value;
  
  if((minp != undefined) && (minp !="") && (parseInt(minp))>=0){
    minp = parseInt(minp);}else
    {minp=undefined}
    if((maxp != undefined) && (maxp != "")&&(parseInt(maxp))>=0){
      maxp = parseInt(maxp)
    }else
    {maxp=undefined}
    getJSONData(PRODUCTS_URL).then(function(result){
      showproducts(result.data)

    })
})
document.getElementById('buscar').addEventListener('input',function(){
  buscar=document.getElementById('buscar').value.toLowerCase();
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(result.data)
  })
})

document.getElementById('limpiar').addEventListener("click",function(){
  document.getElementById("buscar").value="";
  buscar=undefined;
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(result.data)
  })
})