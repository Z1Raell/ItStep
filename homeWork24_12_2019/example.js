'use strict'

//Task 1

/*function comparingNumbers(x,y) {
	if (x > y) {
		console.log(1)
	} else if (x < y) {
		console.log(-1)
	} else {
		console.log(0)
	}
}

comparingNumbers(2,2)*/

//Task 2

/*function factorial(x) {
	if ((x ===1 ) || (x === 0)) {
		console.log(1)
	} else {
		let result = 1;
		for (let i = 1; i <= x; i++) {
			result = result * i;
		}
		console.log(result)
	}
}
factorial(4)*/

//Task 3 

/*function union() {
	let x = prompt('Введите число x', '');
	let y = prompt('Введите число y', '');
	let z = prompt('Введите число z', '');
	let n = x + y +z ;
	console.log(n)
}

union(1,2,3)*/

//Task 4 

/*function rectangle (x,y) {
	if (x === y) {
		x*=x;
		console.log(x)
	} else {
		let area = x*y;
		console.log(area)
	}
}
rectangle(3,5)
*/

//Task 5

function perfectNumber(n) {
    let s = 1;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            s += i;
        } else {}
    }
    if (s === n) {
        console.log('Число являеться совершенным');
    } else {
        console.log('Число не являеться совершенным');
    }
}
perfectNumber(6)