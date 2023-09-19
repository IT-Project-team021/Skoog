function showContent(id) {
    // 隐藏所有内容
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 显示选定的内容
    const targetContent = document.getElementById(id);
    targetContent.style.display = 'block';
}

// 当页面加载时执行该函数，确保一开始只显示content1
window.onload = function () {
    showContent('content1');
}

var modal = document.getElementById('loginModal');
var btn = document.getElementById('loginBtn');
var span = document.getElementsByClassName('close-btn')[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}