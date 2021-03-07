window.onload = function() {
  x = document.querySelector("#title");
  x.style.fontSize = "8vw";
  x.addEventListener("click", function() {
    x.className = "changeColor";
  });
};