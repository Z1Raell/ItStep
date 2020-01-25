'use strict'

//Task 1

/*function multiplications(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * multiplications(x, n - 1);
	}
}

console.log(multiplications(2,3))
*/
//Task 6 

/*function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}
console.log(fibonacci(4))
*/

//Task 2

/*function nod (m,n) {
	if (n === 0) {
		return m;
	} else {
		return nod(n , m % n);	
	}
}
console.log(nod(3,6));*/

// Task 4

/*function number(x, y = 2) {
    if (y > x / 2) {
        return true;
    }
    return x % y ? number(x , ++y) : false;
}
console.log(number(2))*/

// Task 5 

function numberDivisors(x, y = 1) {
	if (y === x + 1) {
		return x;
	} else  ( !( x % y ) ) {
		 return numberDivisors(x, y + 1);
	}
}

console.log(numberDivisors(8))