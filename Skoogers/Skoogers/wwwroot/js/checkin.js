document.addEventListener("DOMContentLoaded", function () {
  const getButton = document.getElementById("getButton");

  getButton.addEventListener("click", function () {
    const newImage = document.createElement("img");

    newImage.src = "img/Icons/CheckIn/attend.png";

    newImage.style.width = "100px";
    newImage.style.height = "100px";

    const date1 = document.getElementById("date1");

    date1.innerHTML = '';
    date1.appendChild(newImage);

    setTimeout(function () {
      window.location.href = "HomePage.html";
    }, 1000);
  });

  var HomePage = document.getElementById("homepage_button");

  HomePage.addEventListener("click", function() {
      window.location.href = "HomePage.html";
  });

  var Account = document.getElementById("login_button");

  Account.addEventListener("click", function() {
      window.location.href = "Account.html";
  });
});
