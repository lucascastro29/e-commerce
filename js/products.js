
var minp=undefined;
var maxp=undefined;
var buscar=undefined;

//funcion para mostrar el array en cuestión y con sus correspondientes if para el buscador y los filtros
function showproducts(array){
  let content=''

  array.forEach(element => {
    if(((minp==undefined)||element.cost>=minp)&&
      ((maxp==undefined)||element.cost<=maxp)&&
      (buscar==undefined||element.name.toLowerCase().includes(buscar)||
      element.description.toLowerCase().includes(buscar))){

        content +='<div>'
        content +='<img src="'+element.imgSrc+'" alt=""></img>'
        content +='<p>Nombre: '+ element.name+'</p>';
        content +='<p>Precio: '+ element.currency+element.cost+'</p>';
        content +='<p>vendidos: '+element.soldCount+'</p>';
        content +="<p>Descripción: "+element.description+'</p>';
        content +='</div>';    
        }
  
    });

    document.getElementById("mainproducts").innerHTML=content;
}

//función que ordena un "array" de la forma que sea especificada con el "num"
function sortproducts(num,array){
  let result=[];
  if(num===2){
      result=array.sort(function(a,b){
        if(a.cost<b.cost){
          return-1}
        if(a.cost>b.cost){
          return 1}
          return 0;
    });
  }else
  if(num===1){
      result=array.sort(function(a,b){
        if(a.cost>b.cost){
          return-1}
      if(a.cost<b.cost){
        return 1}
        return 0;
    })
  }else
  if(num===3){
    result=array.sort(function(a,b){
      if(a.soldCount>b.soldCount){
        return-1}
      if(a.soldCount<b.soldCount){
        return 1}
        return 0;
    });
  }
    return result;
  
}
//carga productos sin filtros al inicio de la pagina
document.addEventListener("DOMContentLoaded", function (e){
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(result.data)        
  })
})


//carga los productos con el filtro de precios descendente
document.getElementById('Descendente').addEventListener('click',function(e){
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(sortproducts(1,result.data))
  })
})

//carga los productos con el filtro de precios ascendente
document.getElementById('Ascendente').addEventListener('click',function(e){
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(sortproducts(2,result.data))
  })  
})

//carga los productos con el filtro de relevancias de forma descendiente
document.getElementById('Relevancia').addEventListener('click',function(e){
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(sortproducts(3,result.data))
  })    
})
  
//carga los productos con los precios dentro de los margenes establecidos
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

//carga los productos que sus nombres o descripción coincida con el valor del buscador
document.getElementById('buscar').addEventListener('input',function(){
  buscar=document.getElementById('buscar').value.toLowerCase();
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(result.data)
  })
})

//carga los productos sin filtros.
document.getElementById('limpiar').addEventListener("click",function(){
  document.getElementById("buscar").value="";
  buscar=undefined;
  minp=undefined;
  maxp=undefined;
  getJSONData(PRODUCTS_URL).then(function(result){
    showproducts(result.data)
  })
})