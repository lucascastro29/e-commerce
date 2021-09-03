
document.getElementById('form').addEventListener('submit',function(){
localStorage.clear()
    var inputEmail= document.getElementById("Email").value
localStorage.setItem("email",inputEmail)
})

