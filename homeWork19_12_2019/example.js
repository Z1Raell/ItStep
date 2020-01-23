'use strict'
// Task 1
/*let firstNumber = +prompt('Введите первое число выборки', '')
let secondNumber = +prompt('Введите последнее число выборки', '')
let result = 0
for (; firstNumber <= secondNumber; firstNumber++) {
    result += firstNumber;
}
console.log(result)*/

//Task 2 я не совсем понял как сделать именно с циклом потому применил с функцией
/*function nod() {
    let x = +prompt('Введите первое число', '')
    let y = +prompt('Введите второе число', '')
    while (y !== 0) y = x % (x = y);
    return x;
}
console.log(nod());*/

//Task 3 

/*let number = +prompt('Введите число' , '')
for (let i = 0; i <= number; i++) {
	if (number % i === 0) {
		console.log(i)
	}
	else {
		console.log('Вы ввели некоректное значение')
	}
}*/

//Task 4

/*
let number = +prompt('Введите число', '')
let count = 0;

for (let i = 1; number / i >= 1; i *= 10) {
    count++;
}

console.log(count)*/

//task 6
/*console.log('0 в качестве оператора прервёт выполнения');
while (true) {
    let n = prompt('Введите знак (+ , - , * , /)', '');
    if (n === "0") {
        break;
    } else if (n === "+") {
        let x = +prompt('x=', '');
        let y = +prompt('y=', '');
        if (n === '+') {
            let a = x + y;
            console.log(a);
        } else {

        }
    } else if (n === "-") {
        let x = +prompt('x=', '');
        let y = +prompt('y=', '');
        if (n === '-') {
            let a = x - y;
            console.log(a);
        } else {

        }
    } else if (n === "*") {
        let x = +prompt('x=', '');
        let y = +prompt('y=', '');
        if (n === '*') {
            let a = x * y;
            console.log(a);
        } else {

        }
    } else if (n === "/") {
        let x = +prompt('x=', '');
        let y = +prompt('y=', '');
        if (n === '/') {
            if (y != 0) {
                let a = x / y;
                console.log(a);
            } else {
                console.log('На ноль делить нельзя');
            }
        } else {	
            console.log('Неверный знак операции');
        }
    }
}*/

//Task 9

/*for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}*/

//Task 8

/*while (true) {
	let question = prompt('вы хотите увидить следующий день недели? Если да введите 1 если нет то 0', '')
	if ( question === '0' ) {
		break;
	} else {
		let n = 0;
		let result;
		for (let i = 0; i <= 7; i++) {
			result = n + i;	
			console.log(i);
		}
	}
}*/

//Task 10 

let renge = +prompt('Введите число от 0 до 100', '')
let N;

while (true) {
    if (renge === n) {
    	break;
    } else if  {

    }
}