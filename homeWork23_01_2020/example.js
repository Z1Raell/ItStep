'use strict'

//Task 1 

/*let arr = [];
arr[0] = 'Aplle';
arr[1] = 'Pineple';
console.log(arr);
arr.pop();*/

//Task 2 

/*function rangeBetween(x,y) {
	let arr = [];
	let result = y - x;
	for (let i = 0; i <= result ; i++) {
		arr[i] = x + i;
	}
	console.log(arr);
}
rangeBetween(8,12);*/

//Task 3 

/*function fillArray(x,y) {
	let arr = [];
	for (let i = 0; i < y; i++) {
		arr[i] = x;
	}
	console.log(arr);
}

fillArray(1,5);*/

//Task 4 
let arr = [
    1,
    2,
    3,
    true,
    undefined,
    '8',
]

function sumArrey(array) {
    let sum = 0;
    for (let i = 0; i <= array.length; i++) {
        if (typeof(array[i]) === 'number') {
            sum += array[i];
        }
    }
    console.log(sum);
}
sumArrey(arr);