"use strict"; //Task 1

document.getElementById("open").addEventListener('click', openWindow);

function openWindow() {
  window.open("https://itstep.org", "itStep", "width:640,height=480");
}

function closeWindow() {
  window.close();
}

document.getElementById("closse").addEventListener('click', closeWindow); //TAsk 2 

window.addEventListener('load', function () {
  var languages = window.navigator.languages;
  var str = "";

  for (var i = 1; i < languages.length; i++) {
    str += languages[i] + ' ';
  }

  document.getElementById('p').innerHTML = "<b>".concat(languages[0], "</b> ").concat(str);
}); //Task 3 

document.getElementById("historyCount").addEventListener("click", function () {
  console.log(window.history.length);
});