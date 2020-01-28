'use strict'

// Task 1 

/*let obj = {
    a: 5,
    b: 6,
    c: 7,
}


obj.b;
obj['b'];

obj.newB = 8;
obj.a = obj.newB;
delete obj.newB;*/

//Task 2 

/*let fractionOne = {
    x: 6,
    y: 8,
}

let fractionTwo  = {
    z: 12,
    c: 18,
}

function addition() {
    let additionFraction = (fractionOne.x * fractionTwo.c + fractionTwo.z * fractionOne.y) / (fractionOne.y * fractionTwo.c);
    console.log(additionFraction);
}

addition();

function subtraction() {
    let subtractionFraction = (fractionOne.x * fractionTwo.c - fractionTwo.z * fractionOne.y) / (fractionOne.y * fractionTwo.c);
    console.log(subtractionFraction);
}

subtraction();

function multiplication () {
	let multiplicationFraction = (fractionOne.x * fractionTwo.z) / (fractionOne.y * fractionTwo.c);
	console.log(multiplicationFraction)
}

multiplication()

function division () {
	let divisionFraction = (fractionOne.x * fractionTwo.c) / (fractionOne.y * fractionTwo.z);
	console.log(divisionFraction);
}

division();*/

//Task 3 

let clock = {
	hour: 12,
	minute: 30,
	second: 20,
}

/*console.log(clock);*/

function plusSecond(x) {
	if (clock.second + x >= 60) {
		clock.second = (clock.second + x) - (((clock.second + x) / 60) * 60);
		clock.minute = clock.minute + ((clock.second + x) / 60);
	} else {
		clock.second = clock.second + x;
	}
}

plusSecond(40);