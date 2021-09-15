
//muestra los datos de un json
function showproduct(element){
    let content=`
    
          <div class="text-center p-4"><h2> ${element.name}</h2></div>
          <div id="mainproducts">
          <div>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" id="tamaño" src="${element.images[0]}" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" id="tamaño" src="${element.images[1]}" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" id="tamaño" src="${element.images[2]}" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
          <p>Precio: ${element.currency} ${element.cost}</p>
          <p>vendidos: ${element.soldCount}</p>
          <p>Descripción: "${element.description}</p>
          </div>
          </div> <br>
        
          `
          document.getElementById("producto").innerHTML+=content;
          
          
          
      };
  //muestra los comentarios 
function showcomentario(array){
    let comment=''
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
          comment +='<div>'
          comment +='<div id="comments">'
          comment +='<p>'+ element.user+':</p>';
          comment +='<p>'+element.description+'</p>';
          comment +="<p>"+element.dateTime+'</p>';

          if(element.score>4){
          comment +='<span class="fa fa-star checked"></span>'
          comment +='<span class="fa fa-star checked"></span>'
          comment +='<span class="fa fa-star checked"></span>'
          comment +='<span class="fa fa-star checked"></span>'
          comment +='<span class="fa fa-star checked"></span>'}else
          if(element.score>3){
            comment +='<span class="fa fa-star checked"></span>'
            comment +='<span class="fa fa-star checked"></span>'
            comment +='<span class="fa fa-star checked"></span>'
            comment +='<span class="fa fa-star checked"></span>'
            comment +='<span class="fa fa-star"></span>'}else
          if(element.score>2){
                comment +='<span class="fa fa-star checked"></span>'
                comment +='<span class="fa fa-star checked"></span>'
                comment +='<span class="fa fa-star checked"></span>'
                comment +='<span class="fa fa-star"></span>'
                comment +='<span class="fa fa-star"></span>'}
          comment +='</div>';    
          comment +='</div> <br>'
        
    }
    document.getElementById("comentarios").innerHTML+=comment;
}

var Starvar=0
//funcion que colorea las estellas de tu comentario
function star(n){
    for (let i = n; i > 0; i--) {
        document.getElementById("star"+i+"").className +="fa fa-star checked" 
    }
    return Starvar=n
}
function comentar(){

  let content='' 

  content+='<div style="width="100%" ">'
  content+='<div id="comments">'
  content+='<p>'+localStorage.getItem("email")+'</p>'
  content+='<p>'+document.getElementById("textocoment").value+'</p>'
  if(Starvar==1){
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
  }else
   if(Starvar==2){
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
  }else
  if(Starvar==3){
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
  }else
  if(Starvar==4){
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star"></span>'
  }else
  if(Starvar==5){
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
      content+='<span class="fa fa-star checked"></span>'
  }else{
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
      content+='<span class="fa fa-star"></span>'
  }

  content+='<p style=" width="100%"">'+ new Date().getFullYear()  + "-" + (new Date().getMonth() +1) + "-" +new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+'</P>'
  content+='</div>'
  content+='</div><br>'


  document.getElementById("comentarios").innerHTML+=content;


}


document.addEventListener("DOMContentLoaded", function(){

getJSONData('https://lucascastro29.github.io/JsonP'+localStorage.getItem("producto")+'/').then(function(result){
    showproduct(result.data);
 
    
        
    }).then(function(){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(result){showcomentario(result.data)})
    })
})





      
