"use strict";
//Task 1
/*let arrey = [",", ".", "'", " "];
let arreyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function info(str, firsArrey, secondArrey) {

    let letters = 0;
    let numbers = 0;
    let signs = 0;

    for (let i = 0; i < str.length; i++) {
        if (typeof(str[i] === "string")) {
            letters++;
        }

        for (let k of firsArrey) {
            if (str[i] === k) {
                signs++;
            }
        }
        for (let j of secondArrey) {
            if (+str[i] === j) {
                numbers++;
            }
        }
    }
    console.log(`signs = ${signs} , letters = ${letters} , numbers = ${numbers}`);
}*/

//Task 2

/*let numbers = {
    10: "десять",
    11: "одинадцать",
    12: "двенадцать",
    13: "тринадцать",
    14: "читырнадцать",
    15: "пъятнадцать",
    16: "шестнадцать",
    17: "семнадцать",
    18: "восемнадцать",
    19: "девятнадцать",
    20: "двадцать",
    21: "двадцать одиг",
    22: "жважцать два",
    23: "двадцать три",
    24: "двадцать четыре",
    25: "двадцать пъять",
    26: "двадцать шесть",
    27: "двадцать семь",
    28: "двадцать восемь",
    29: "двадцать девять",
    30: "тридцать",
    31: "тридцать один",
    32: "тридцать два",
    33: "тридцать три",
    34: "тирдцать читыре",
    35: "тридцать пъть",
    36: "тридцать шесть",
    37: "тридцать семь",
    38: "тридцать восемь",
    39: "тридцать девять",
    40: "сорок",
    41: "десять",
    42: "десять",
    43: "десять",
    44: "десять",
    45: "десять",
    46: "десять",
    47: "десять",
    48: "десять",
    49: "десять",
    50: "десять",
    51: "десять",
    52: "десять",
    53: "десять",
    54: "десять",
    55: "десять",
    56: "десять",
    57: "десять",
    58: "десять",
    59: "десять",
    61: "десять",
    62: "десять",
    63: "десять",
    64: "десять",
    65: "десять",
    66: "десять",
    67: "десять",
    68: "десять",
    69: "десять",
    71: "десять",
    72: "десять",
    73: "десять",
    74: "десять",
    75: "десять",
    76: "десять",
    77: "десять",
    78: "десять",
    79: "десять",
    80: "десять",
    81: "десять",
    83: "десять",
    84: "десять",
    85: "десять",
    86: "десять",
    87: "десять",
    88: "десять",
    89: "десять",
    90: "десять",
    91: "десять",
    92: "десять",
    93: "десять",
    94: "десять",
    95: "десять",
    96: "десять",
    97: "десять",
    98: "десять",
    99: "десять",
}
//Возможно так не правильно сделано но я придумал так , можно и масивом с отнманием еденицы но тогда масив должен идти по порядку во избежанию ошибок.
function doubleDigit(obj, x) {
    console.log(numbers[x]);
}*/

//Task 3 

/*function caseChange(str) {
    let copyStr = str.toUpperCase();
    let result = "";
    let arrey = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === copyStr[i]) {
            result += str[i].toLowerCase();
        } else if (typeof(str[i]) === "string") {
            result += str[i].toUpperCase();
        }
        for (let j of arrey) {
            if (str[i] === j) {
                result += str[i].replace(str[i], "_");
            }
        }
    }
    console.log(result);
}*/

//Task 4 

function transformationToCamelCase(str) {
    return str.split("-").map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
    console.log(str);
}

//Task 5 

function abr(str) {
    return str.split(" ").map((index) => index[0].toUpperCase()).join("");
}