"use script"

//Task 1

/*function pergeckNumber(x, y) {
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
*/

//Task 2 x - часы  y - минуті  s - секунды

/*function clock(x, y, s) {
    if (x === 0) {
        console.log('00');
    } else {
        console.log( x );
    }
    if (y === 0  ) {
    	console.log('00');
    } else {
    	console.log(y)
    }
    if (s === 0 ) {
    	console.log('00')
    } else {
    	console.log(s)
    }
}

clock(4, 30 , 0)*/

//Task 3 

/*function clock (x , y , s) {
	let hours = (x * 60);
	let minute = ((y + hours) * 60) ;
	let second = s + minute;
	console.log(second);
}
clock(4, 30, 20);*/

//Tsk 4 

/*function second(s) {
    let minute = s / 60;
    let hours = minute / 60;
    let curentMinute = (s / 60) - (hours / 60);
    let curentSecond = (s - minute * 60);
    console.log(curentSecond + ' ' + minute + ' ' + hours);
}
second(240);*/

//Task 5 x - часы   y - минуты   z - секунды индэксы обозначают дату  

function Date(x1, y1, z1, x2, y2, z2) {
    let firstHours = (x1 * 60);
    let firstMinute = ((y1 + firstHours) * 60);
    let firstSecond = z1 + firstMinute;
    let firsDate = firstSecond;

    let SecondHours = (x2 * 60);
    let SecondMinute = ((y2 + SecondHours) * 60);
    let Second = z2 + SecondMinute;
    let secondDate = Second;

    let curentDate = firsDate - secondDate;

    let minute = curentDate / 60;
    let curentSecond = curentDate - (minute / 60);
    let curentHourse = minute / 60;
    let curentMinute = minute - (curentHourse / 60);

    console.log(curentHourse + ' ' + curentMinute + ' ' + curentSecond);
}

Date(4,7,40,5,8,30);