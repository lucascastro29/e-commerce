
const urlproducts="https://lucascastro29.github.io/Autos/";

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

}


  document.addEventListener("DOMContentLoaded", function (e) {
     getJSONDATA(urlproducts).then(function(result){
         if(result.status==="ok"){
             products=result.data;
             showproducts(products)
         }
     })
     
      
  })