function showproduct(element){
    let content=''

          content +='<div>'
          content +='<img src="'+element.images[1]+'" alt=""></img>'
          content +='<p>Nombre: '+ element.name+'</p>';
          content +='<p>Precio: '+ element.currency+element.cost+'</p>';
          content +='<p>vendidos: '+element.soldCount+'</p>';
          content +="<p>Descripción: "+element.description+'</p>';
          content +='</div>';    
          
          document.getElementById("mainproducts").innerHTML=content;
      };
  
     
  

document.addEventListener("DOMContentLoaded", function(e){
localStorage.getItem("producto")
getJSONData(PRODUCT_INFO_URL).then(function(result){
    showproduct(result.data)
})
});