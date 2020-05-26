"use strict";

//Task 1 

function unionStr(...args) {
    let result;
    result = args.join("");
    console.log(result);
}

//Task 2

function calculator(str) {
    let result = eval(str);
    console.log(result);

};
/*С калькулятором я как - то затупил, не могу понять как именно его сделать, есть атклей вариант то есть одно НО в виде eval*/

//Task 3 

function infoUrl(url) {
    let info = url.split('/');
    for (let i of info) {
        console.log(i)
    }
}

//Task 3 

function separation(str, separator) {
    let result = 0;
    while (true) {
        let foundPos = str.indexOf(separator, result);
        if (foundPos === -1) break;

        console.log(str.slice(result, foundPos));
        result = foundPos + 1;
    }
}