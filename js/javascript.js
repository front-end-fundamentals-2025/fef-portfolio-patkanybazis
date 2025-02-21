document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  const nameElement = document.getElementById("name");
  const menuItems = document.querySelectorAll(".menu li");

  button.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "purple") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "purple";
    }
  });

  menuItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      if (document.body.style.backgroundColor === "purple") {
        item.style.color = "black";
      } else {
        item.style.color = "purple";
      }
      item.style.fontSize = "1.2em";
    });

    item.addEventListener("mouseout", function () {
      item.style.color = "";
      item.style.fontSize = "";
    });
  });
});
