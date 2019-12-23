'use strict'
// Задания 1

/*let year = +prompt('Ваш возрост', '')
switch (year) {
    case 0 <= 2:
        alert('Вы ребёнок')
        break;
    case 2 < 12:
        alert('Вы школьник')
        break;
    case 12 < 18:
        alert('Вы подросток')
        break;
    case 18 < 60:
        alert('Вы взрослый')
        break;
    case 60 < 200:
        alert('Вы пенсионер')
        break;


    default:


        break;
}*/

//Задания 2

/*let number = +prompt('Введите число от 0 до 9', '')
switch (number) {
    case 0:
        alert(')')
        break;
    case 1:
        alert('!')
        break;
    case 2:
        alert('@')
        break;
    case 3:
        alert('#')
        break;
    case 4:
        alert('$')
        break;
    case 5:
        alert('%')
        break;
    case 6:
        alert('^')
        break;
    case 7:
        alert('&')
        break;
    case 8:
        alert('*')
        break;
    case 9:
        alert('(')
        break;
    default :
        alert('Вы указали неверно')
        break;

}*/


//Задания 3 

/*let number = +prompt('Введите трёхзначное число', '');
if (number >= 0 && number <= 99) {
    alert("Вы ввели неверное число. Число должно быть трехзначным");
} else if (number >= 1000) {
    alert("Вы ввели неверное число. Число должно быть трехзначным");
} else if (((number / 100) % 10) == ((number / 10) % 10) || ((number / 10) % 10) == (number % 10) || ((number / 100) % 10) == (number % 10))
    alert('Среди цифр введенного трехзначного числа есть одинаковые');

else {
    alert("Среди цифр введенного трехзначного числа нет одинаковых");
}
*/

//Хадания 4

/*let year = +prompt('Введите пожалуйста год');

if (year % 400 === 1) {
    alert('Хто высокосный год');
} else if (year % 4 === 0) {
    alert('Это высокосный год');
} else {
    alert('Вы не ввели год');
}*/

//Задания 5

let number = +prompt('Введите пятирозрядное число', '');
let reversed = number.reverse();
if (reversed === number) {
    alert('Число являеться палиндромом');
} else { 
    alert('Число не являеться палиндромом'); 
}