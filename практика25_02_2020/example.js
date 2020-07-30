"use strict";

class GeometricFigur {
    constructor(leftSide, rigthSide, topSide, botomSide) {
        this.leftSide = leftSide;
        this.rigthSide = rigthSide;
        this.topSide = topSide;
        this.botomSide = bottomSide;
    }

    get getName() {
        return this.name = neme;
    }

    getPerimetr() {
        let P = this.leftSide + this.rigthSide + this.topSide + this.botomSide;
        console.log(P)
    }

    getArea() {
        let S = this.leftSide * this.botomSide;
        console.log(S)
    }
}

class Square extends GeometricFigur() {
    constructor() {
    }

    getPerimetr() {
        return this.leftSide*2 + this.botomSide * 2;
    }
    getArea() {
        return this.leftSide*  this.botomSide;
    }

}

