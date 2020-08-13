"use strict"

field.onclick = function (event) {


    let fieldCoords = this.getBoundingClientRect();


    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left < 0) ballCoords.left = 0;



    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

//Task 2 
let selectedLi;
let ul = document.querySelector('ul');

ul.onclick = (e) => {
    let target = e.target;
    let element = document.querySelectorAll('li.boks__list')
    if (target.tagName != 'LI') return;

    highlight(target)
}

function highlight(li) {
    if (selectedLi) {
        selectedLi.classList.remove('active');
    }
    selectedLi = li;
    selectedLi.classList.add('active');
}

//Task 3 

let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;


    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);


    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

};