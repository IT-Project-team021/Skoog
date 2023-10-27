document.addEventListener("DOMContentLoaded", function () {
    var CheckIn = document.getElementById("icon_checkin");

    CheckIn.addEventListener("click", function() {
        window.location.href = "Checkin.html";
    });

    var Record = document.getElementById("icon_record");

    Record.addEventListener("click", function() {
        window.location.href = "Record.html";
    });

    var Achievement = document.getElementById("icon_achievement");

    Achievement.addEventListener("click", function() {
        window.location.href = "Achievement1.html";
    });

    var HomePage = document.getElementById("homepage_button");

    HomePage.addEventListener("click", function() {
        window.location.href = "HomePage.html";
    });

});
