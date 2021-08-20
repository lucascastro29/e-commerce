var getJSONDATA = function(url){
  
  var result={}
  return fetch(url).then(response=>{
    if(response.ok){
      return response.json()
    }else{
      throw Error(response.statusText)
    }
  }).then(function(response){
    result.status="ok"
    result.data=response
    return result
  }).catch(function(error){
    result.status="error"
    result.data=error
    return result
  })
}
function showproducts(array){
    let content=''

    array.forEach(element => {
        content +='<div>'
        content +='<img src="'+element.imgSrc+'" alt=""></img><br>'
        content +='Nombre: '+ element.name+'<br>';
        content +='Precio: '+ element.currency+element.cost+'<br>';
        content +='vendidos: '+element.soldCount+'<br>';
        content +="Descripción: "+element.description+'<br>';
        content +='</div>';
        
        
    });
    document.getElementById("mainproducts").innerHTML=content;
}


  document.addEventListener("DOMContentLoaded", function (e) {
     getJSONDATA(PRODUCTS_URL).then(function(result){
         if(result.status==="ok"){
             products=result.data;
             showproducts(products)
         }
     })
     
      
  })