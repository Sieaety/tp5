window.onload = function() {
  x = document.querySelector("#title");
  x.style.fontSize = "8vw";
  x.addEventListener("click", function() {
    x.className = "changeColor";
  });
  list = document.querySelectorAll("h4");
  console.log(list);
  list.item(0).addEventListener("click", function() {
    document.querySelector('#ingredients').classList.toggle('hide');
  });
    list.item(1).addEventListener("click", function() {
    document.querySelector('#equipment').classList.toggle('hide');
  });
    list.item(2).addEventListener("click", function() {
    document.querySelector('#directions').classList.toggle('hide');
  });
};