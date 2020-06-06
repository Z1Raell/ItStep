"use strict";

//Task 1 

class circle {
    constructor(radius) {
        this.radius = radius;
    }

    get getRadius() {
        return this._radius;
    }
    set setRadius(value) {
        this._radius = value;
    }
    get getDiametr() {
        return (this._radius * 2);
    }

    getAreaCircle() {
        return (Math.PI) * (this._radius ** 2);
    }

    getLongCircle() {
        return (Math.PI * this._radius * 2);
    }

}

let firstCircle = new circle(5);

// Task 2 

class Children {
    constructor(name, subName, age) {
        this.name = name;
        this.subName = subName;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    set setNAme(value) {
        this.name = value;
    }

    get getSubName() {
        return this.subName;
    }

    set setSubName(value) {
        this.subName = value;
    }

    get getAge() {
        return this.age;
    }

    set setAge(value) {
        this.age = value;
    }

    showChild() {
        console.log(`Name ${this.name} Subname ${this.subName} Age ${this.age}`)
    }
}

/*let firstChild = new Children("Name", "SubName", 17);
firstChild.showChild();

let secondChild = new Children("Any name", "Any last name", 16);
secondChild.showChild();*/

//Task 3 


class CssClass {
    arr = [];
    constructor(nameCss) {
        this.nameCss = nameCss;
    }

    get getStyle() {
        return this.nameCss;
    }

    set setStyle(value) {
        this.nameCss = value;
    }

    addCssStyle() {
        arr = value;
    }

    removeCssStyle() {
        arr = 0;
    }
}

let bgc = new CssClass("bagcgroundColor");