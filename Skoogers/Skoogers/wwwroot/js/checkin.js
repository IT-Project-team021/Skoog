document.addEventListener("DOMContentLoaded", function () {
    // 获取"Get"按钮元素
    const getButton = document.getElementById("getButton");
  
    // 添加点击事件处理程序
    getButton.addEventListener("click", function () {
      // 创建一个新的图片元素
      const newImage = document.createElement("img");
  
      // 设置新图片的src属性
      newImage.src = "img/Icons/CheckIn/attend.png"; // 设置图片路径
  
      // 设置新图片的宽度和高度，以及其他样式
      newImage.style.width = "100px";
      newImage.style.height = "100px";
  
      // 获取日期1元素
      const date1 = document.getElementById("date1");
  
      // 替换日期1的内容为新图片
      date1.innerHTML = '';
      date1.appendChild(newImage);

      // 延迟两秒后进行页面跳转
      setTimeout(function () {
        window.location.href = "HomePage.html"; // 请替换为实际的页面路径
      }, 1000); // 2000毫秒（2秒）
  
    });
  });
  