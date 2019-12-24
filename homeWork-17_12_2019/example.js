"use strict";

//Задания 1

/*let many = +prompt('Ввведите количество USD', '');
let currency = prompt('Введите валюту которую хотите получить')
switch (currency) {
    case 'EUR':
        alert(many * 0.9)
        break;
    case 'UAN':
        alert(many * 23.3)
        break;
    case 'AZN':
        alert(many * 1.7)
        break;
    default:
        alert('Вы не введи валюту')
        break;
}*/

//Задание 2

/*let sum = +prompt('Введите суму покупки', '')
if (200 < sum || sum < 300) {
    alert(sum - (sum / 100 * 3));
} else if (300 < sum || sum < 500); {
    alert(sum - (sum / 100 * 5));
} else if (500 < sum) {
    alert(sum - (sum / 100 * 7));
} else {
    alert('Вы ввели некоректное значение');
}*/

//Задание 3

/*let sircle = +prompt('Введите длинну окружности','');
let square = +prompt('Введите длинну квадрата','');
let radius = sircle/(2*3.14);
let long = square/4;
if (radius/2 === long) {
	alert('Это может быть вписанная окружность');
} else {
	alert('Это не может быть вписанная окружность');
}*/

//Задание 4

/*let firstQuestion = alert('Мы живём на планете?')
if (true) {} else {}
*/

//Задание 5

let year = +prompt('Введите год', '')
let month = +prompt('Введите месяц', '')
let day = +prompt('Введите день', '')
alert(year+1)
alert(month+1)
alert(day +1)