//Task 1 
/*
let arrey = ["orange", 4, 6, 12, 99, {
    name: "apple",
    value: 12,
}]

function arreyFragment(arr, a) {
    if (a < arr.length) {
        for (let i = 0; i <= a; i++) {
            console.log(arr[i]);
        }
    } else {
        for (let i of arr) {
            console.log(i);
        }
    }
}*/

//Task 2 

/*let firsArrey = [1, 5, 3, 6]
let secondArrey = [4, 8, 16, 4]


function concatArrey(firsArr, secondArr) {
    let thirdArrey = firsArr.map((value, index) => {
        return value + secondArr[index]
    });
    console.log(thirdArrey);
    Это самый просто вариант если у нас масивы одинаковые и везде числа , 
    я просто не совсем понимаю как запустить цикл для двух масивов одновременно что бы сдлеать проверки type of и количества елементов , 
    моно ли было запустить например что=то такое for(let i = 0; i <= firstArr.length && i <= secondArr; i++)
}*/

// Task 3 

/*let arrey = [2, 4, 3, 5, 8, 4, 1, 7, 2, 8,8];

function repeat(arr) {
    let result = {};
    arr.forEach((i) => result[i] = result[i] + 1 || 1);
    for (let key in result) {
        console.log("число " + key + " повторяеться " + result[key] + " раз(а)");
    }
}*/

//Task 4 

let arrey = [5, 9, 1, 18, "test", {}];

function moving(arr, from, to) {
    if (Math.min(from, to) < 0 && Math.max(from, to) >= arr.length) {
        console.eror("Out of range");
        return null;
    }
    let item = arr.splice(from, 1);
    arr.splice((to > 0) ? to - 1 : 0, 0, item[0])
    return arr;
}