var username = "user1@user.com";
var password = "123";
var userIcon = "img/Icons/Homepage/User1.png";


function login(){
    var inputUsername = document.getElementById("accountEmail").value;
    var inputPassword = document.getElementById("passwordInput").value;

    if(inputUsername === username && inputPassword === password){
        hideLogin();
        changeUserIcon();
    }else{
        showWrongPwd();
    }
}

function changeUserIcon(){
    var image = document.getElementById("login_button");
    image.src = userIcon;
}

function showWrongPwd(){
    var wrongPwdElement = document.querySelector('.log-in-error-message');
    wrongPwdElement.style.display = 'block';
}

function showLogin() {
    var loginElement = document.querySelector('.log-in');
    loginElement.style.display = 'block';
}

function hideLogin() {
    document.querySelector('.log-in').style.display = 'none';
}