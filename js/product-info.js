function showproduct(element){
    let content=''

          content +='<div class="text-center p-4"><h2>'+ element.name+'</h2></div>';
          content +='<div id="mainproducts">'
          content +='<div>'
          content +='<img src="'+element.images[0]+'" alt=""></img>'
          
          content +='<p>Precio: '+ element.currency+element.cost+'</p>';
          content +='<p>vendidos: '+element.soldCount+'</p>';
          content +="<p>Descripción: "+element.description+'</p>';
          content +='</div>';    
          content +='</div> <br>'
          content+='<div id="comentar"><textarea name="" id="" cols="30" rows="10">asd</textarea> <button >comentar</button></div>'
          document.getElementById("producto").innerHTML=content;
          
          

      };
  
function showcomentario(array){
    let comment=''
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
          comment +='<div>'
          comment +='<div>'
          comment +='<p>'+ element.user+':</p><br>';
          comment +='<p>'+element.description+'</p>';
          comment +="<p>"+element.dateTime+'</p>';
          comment +='</div>';    
          comment +='</div> <br>'
        
    }
    document.getElementById("comentarios").innerHTML=comment;
}



document.addEventListener("DOMContentLoaded", function(){

getJSONData('https://lucascastro29.github.io/JsonP'+localStorage.getItem("producto")+'/').then(function(result){
    showproduct(result.data);
        
    }).then(function(){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(result){showcomentario(result.data)})
    })
})
