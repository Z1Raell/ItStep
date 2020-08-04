"use script";

//Task 1

let input = document.getElementById('input');
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

input.addEventListener('keyup', (e) => {
    for (const i of numbers) {
        if (i === e.key) {
            return input.value = '';
        }
    }

    input.value += e.key;
});
//Task 2 

let btn = document.getElementById('btn');
let modal = document.getElementById('modal-window');
let closeBtn = document.getElementById('btnClose')

function callModalWindow() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

btn.addEventListener('click', callModalWindow);

closeBtn.addEventListener('click', closeModal)

//ATsk 3 
let e = document.querySelectorAll('li');
let tagleBtn = document.getElementById("tagleTraffic");
function tagleColor() {
    let e = document.querySelectorAll('li');
    for (let i = 0; i < e.length; i++) {
        if (e[i].classList.contains('disable')) {
            return e[i].classList.toggle('disable');
        }
        e[i].classList.toggle('disable');
    }
}

tagleBtn.addEventListener('click', tagleColor)