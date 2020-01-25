'use strict'

//Task 1

/*let car = {};
car.name = 'Mercedes Benz';
car.model = "Bionic";
car.model = 'Pete';
delete car.model;*/

//Task 2

/*let obj = {
    name: 'Object',
    price: 15,
    count: 2,
    isShow: true,
}

function multiply() {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 4;
        }
    }
}
multiply(obj);*/

//Task 3 

let car = {
    manufacturer: 'Tesla',
    model: 'X',
    year: 2018,
    averageSpeed: 120,
    // Скорость в км/ч
}

function info() {
    console.log(car)
}
info()

function distance (x) {
	//Дистанция в км 
	let time = x / car.averageSpeed;
	if (time > 4) {
		let result;
		for (let i = 3; i < 4; i++) {
			result = time + i;	
		}
		console.log(result);
	} else {
		console.log(time);
	}
}
distance(600);	