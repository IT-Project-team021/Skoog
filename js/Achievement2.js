document.addEventListener("DOMContentLoaded", function () {  
    var HomePage = document.getElementById("homepage_button");
  
    HomePage.addEventListener("click", function() {
        window.location.href = "HomePage.html";
    });
  
    var Account = document.getElementById("login_button");
  
    Account.addEventListener("click", function() {
        window.location.href = "Account.html";
    });
  });