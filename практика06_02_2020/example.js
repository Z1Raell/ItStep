"use strict";

function comparison(firstStr, secondStr) {
    if (firstStr.length > secondStr.length) {
        console.log(1)
    } else if (firstStr.length < secondStr.length) {
        console.log(-1)
    } else {
        console.log(0)
    }
}

//Task 2

function toUpper(str) {
    str[0].toUpperCase();
    console.log(str);
}

//Task 3

function words(str) {
    let result = 0;
    let stringSerch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    for (let i = 0; i < str.length; i++) {
        for (var j = 0; j < stringSerch.length; j++) {
            if (str[i] === stringSerch[j]) {
                k++;
                break;
            }
            return result ? result : "Net sovpadenyi"
        }
    }
}

// Task 4 

function serchSpam(str) {
    let serchString = ["100%", "бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх"];
    let toLowerCase = str.toLowerCase();
    let strArrey = toLowerCase.split(" ");
    for (let i = 0; i < strArrey.length; i++) {
        for (let j = 0; i < serchString.length; j++) {
            if (strArrey[i] === serchString[j]) {
                console.log("В строке присутствует спам")
            }
        }
    }
}

//Task 5 

function truncate(str, maxLength) {
    return (str.lengt > maxLength) ?
        str.slice(0, maxLength - 1) + "…" : str;
}

//Task 6

function serchPalindrom(str) {
    let reversStr = str.split("").revers().join("");
    if (str === reversStr) {
        console.log("Данная строка являеться палиндромом");
    }
}

//Task 7

function serchWords(str) {
    let arr = str.split(" ");
    console.log(`в строке ${arr.length} слов`);
}

//Task 8 

function theLongestWord(str) {
    let arr = str.split(" ");
    let longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length;
        }
    }
}