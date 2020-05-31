"use strict";

//Task 1

/*let date = new Date().toLocaleString('ru', { month: 'long' });*/


//Task 2 

/*let day = new Date().toLocaleString('ru', { weekday: 'long' });*/

//Task 3 

/*function secondToday() {
    let date = new Date;
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let diff = date - today;
    return Math.round(diff / 1000);
}*/

//Task 4 

function secondsToTomorrow() {
    let date = new Date();

    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - date;
    return Math.round(((diff / 1000) / 60) / 60);
}

//Task 5 

function PSircle(radius) {
    let result = Math.PI * radius * 2;
    console.log(result);
}

//Task 6 

function sinusСalculation(degrees) {
    let radian = degrees * (Math.PI / 100);
    let result = Math.sin(radian) / (Math.PI / 100);
    console.log(result);
}