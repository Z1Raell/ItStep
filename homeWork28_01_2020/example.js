'use strict'

//Task 1 

/*let arrey = [{
        name: 'banana',
        quantity: 2,
        purchaseStatus: true,
    },
    {
        name: 'Apple',
        quantity: 2,
        purchaseStatus: true,
    },
    {
        name: 'Orang',
        quantity: 2,
        purchaseStatus: false,
    },
]

function shoppingList(arr) {
    let status = arr.filter(item => item.purchaseStatus === true);
    console.log(status)
}

shoppingList(arrey);*/


/*function addPurchase(arr) {
    let shoppingList = {
        name: 'lemon',
        quantity: 2,
        purchaseStatus: false,
    }
    if (arr.find(item)) {

    } else { arr.push(shoppingList); }
}
addPurchase(arrey);*/

/*function productPurchase (arr,name) {
    if(arr.find(item => item.purchaseStatus === false)){
        arr.purchaseStatus = true;
    }
}

productPurchase(arrey,'Orang');*/


//Task 2 

/*let arrey = [{
        name: 'Pfone',
        price: 300,
        quantity: 1,
    },
    {
        name: 'Lemon',
        price: 10,
        quantity: 1,
    },
    {
        name: 'headphones',
        price: 80,
        quantity: 1,
    },
]*/

/*function sum(arr) {
    let result = arr.reduce(function(p, c) { return p + c.price; }, 0);
    console.log(result);
}*/


/*function thMostExpensivePurchase(arr) {
    let max = arr.reduce((prev, cur) => cur.price > prev.price ? cur : prev, { price: 0 });
    console.log(max);
}
thMostExpensivePurchase(arrey);*/


/*function average(arr) {


    for (var i = 0; i <= arr.length; i++) {
        let result = arr[i].price / arr[i].quantity;
        console.log(result);
    }
}

average(arrey);*/


//Task 3 

/*let arrey = [{
        name: 'color',
        value: 'red',
    },
    {
        name: 'du',
        value: '16px',
    },
    {
        name: 'text-decoration',
        value: 'underline',
    }
];

function print(arr) {

    for (let style of arr) {
        let result = style.name + ":" + style.value + ";";
        document.write(`<p style="${result}">Hellow</p>`)
    }
}
print(arrey);*/

// Task  4

let arrey = [{
        name: 'философия',
        value: 15,
        faculty: 'философии'
    },
    {
        name: 'физика',
        value: 12,
        faculty: 'радиофизики'
    },
    {
        name: 'математики',
        value: 17,
        faculty: 'мехмат'
    },
]


function print(arr) {
    for (let i of arr) {
        console.log(i);
    }
}

function nameFaculty(arr, facultyName) {
    for (let i of arr) {
        if (i.faculty === facultyName) {
            console.log(i);
        }
    }
}


function comparison(arr) {
    let group = {
        name: 'математика',
        value: 17,
        faculty: 'мехмат',
    }

    for (let i of arr) {
        if (group.nmae === i.nmae && group.value === i.value && group.faculty === i.faculty) {
            console.log(i);
        }
    }
}

function filterValue(arr) {
    arr.sort((a, b) => a.value > b.value ? -1 : 1);
    console.log(arr)
}

function sortArrey(arr) {
    arr.sort((a, b) => a.faculty > b.faculty ? 1 : -1);
    console.log(arr);
}