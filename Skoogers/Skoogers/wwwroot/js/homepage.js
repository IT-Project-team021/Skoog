function toggleRecordingButton() {
    var recordingButton = document.getElementById("recordingButton");
    var recordImage = document.getElementById("recordImage");

    if (recordingButton.style.display === "none" || recordingButton.style.display === "") {
        recordingButton.style.display = "block";
        recordImage.style.display = "none";
    } else {
        recordingButton.style.display = "none";
        recordImage.style.display = "block";
    }
}

function toggleOpenMusicLibrary() {
    var musicLibrary = document.getElementById("MusicLibrary");
    
    if (musicLibrary.style.display === "none" || musicLibrary.style.display === "") {
        musicLibrary.style.display = "block";
    } else {
        musicLibrary.style.display = "none";
    }
}

function toggleCloseMusicLibrary() {
    var musicLibrary = document.getElementById("MusicLibrary");
    
    if (musicLibrary.style.display === "none" || musicLibrary.style.display === "") {
        musicLibrary.style.display = "block";
    } else {
        musicLibrary.style.display = "none";
    }
}

function toggleOpenMusicButton() {
    var musicButton = document.getElementById("newMusicButton");
    
    if (musicButton.style.display === "none" || musicButton.style.display === "") {
        musicButton.style.display = "block";
    }
}

function togglecloseMusicButton() {
    var musicLibrary = document.getElementById("MusicLibrary");
    
    var musicButton = document.getElementById("newMusicButton");
    
    if (musicButton.style.display === "block") {
        musicButton.style.display = "none";
    }
}

function toggleSearch() {
    var search = document.getElementById("Search");
    
    if (search.style.display === "none" || search.style.display === "") {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }
}

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