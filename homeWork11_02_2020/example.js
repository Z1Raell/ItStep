"use strict";

//Task 1

/*function showText() {
    console.log("Hi")
}

let interval = setInterval(showText, 1000);*/

// Task 2 

/*function curentTime() {
    let time = new Date;
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}

let showTime = setInterval(curentTime, 1000);

function stopShowTime() {
    clearInterval(showTime);
}*/

//Task 3 

/*let result = 0;

function progressBar(arg) {

    let bar = setTimeout(() => {
        arg++;
        console.log(bar)
    }, 1000);
}



let dinemicProgresBar = setInterval(progressBar, 1000, result);*/

// Task 4 

let date = new Date;

function increaseDey(curentDate, arg) {
    console.log(curentDate.setDate(curentDate.getDate() + arg) + '.' + (curentDate.getMonth() + 1) + '.' + curentDate.getFullYear());
}

function decreaseDey(curentDate, arg) {
    console.log(curentDate.setDate(curentDate.getDate() - arg) + '.' + (curentDate.getMonth() + 1) + '.' + curentDate.getFullYear());
}

function getWeekDate (weekDate) {
	let arr = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
	return arr[weekDate.getDay()];
}
