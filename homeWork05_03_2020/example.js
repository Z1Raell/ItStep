"use strict"

//Task 1

document.getElementById("open").addEventListener('click', openWindow)
function openWindow() {
    window.open("https://itstep.org", "itStep", "width:640,height=480")
}

function closeWindow() {
    window.close();

}

document.getElementById("closse").addEventListener('click', closeWindow)

//TAsk 2 

window.addEventListener('load', () => {
    let languages = window.navigator.languages;
    let str = "";
    for (let i = 1; i < languages.length; i++) {
        str += languages[i] + ' ';
    }
    document.getElementById('p').innerHTML = `<b>${languages[0]}</b> ${str}`;
})

//Task 3 

document.getElementById("historyCount").addEventListener("click", () => {
    console.log(window.history.length);
})