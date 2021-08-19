//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

    document.getElementById("submitb").addEventListener("click",function(e){
      if(document.getElementById("pordios").value==="true"){Window.location.href="index.html"}
      
     
    })
  
   
})
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

