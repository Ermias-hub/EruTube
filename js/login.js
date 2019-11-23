var acceptedEmail='eru@gmail.com';
var acceptedPassword='123';
login.onclick = function(event) {
    event.preventDefault();
    var email=document.getElementById("eml").value;
    var password=document.getElementById("psw").value;

    if(acceptedEmail != email || acceptedPassword != password){
        errorDisplay.innerHTML = 'Error : please insert valid email and password!';
        errorDisplay.style.display = 'inline';
        return;
    }
    else{
        window.location = 'views/Home.html';
     }
}
