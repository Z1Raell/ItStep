"use strict";

let ul = document.querySelector('ul');
let lastClickedElement = null;
ul.onclick = function (event) {
    if (event.target.tagName !== "LI") return;
    if (event.ctrlKey) {
        selectSomeElement(event.target);
    } else {
        if (event.shiftKey) {
            selectShiftElement(event.target);
        } else {
            selectElement(event.target);
        }
    }
    lastClickedElement = event.target;
};
ul.onmousedown = function () {
    return false;
};
function selectSomeElement(li) {
    li.classList.toggle('selected');
}
function selectElement(li) {
    let selected = ul.querySelectorAll('.selected');
    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}
function selectShiftElement(li) {
    let startElement = lastClickedElement || ul.children[0];
    let isLastClickedBefore = startElement.compareDocumentPosition(li) & 4;
    if (isLastClickedBefore) {
        for (let elem = startElement; elem !== li; elem = elem.nextElementSibling) {
            elem.classList.add('selected');
        }
    } else {
        for (let elem = startElement; elem !== li; elem = elem.previousElementSibling) {
            elem.classList.add('selected');
        }
    }
    li.classList.add('selected');
}