class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        if(
            this.side1 + this.side2 > this.side3 &&
            this.side1 + this.side3 > this.side2 &&
            this.side2 + this.side3 > this.side1
        ){
            return true;
        } else {
            return false;
        }
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangles) {
        return triangles.filter((triangle) => {
            return triangle.hasValidSideLengths();
        })
    }
}

class Scalene extends Triangle {
    constructor(side1,side2,side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isScalene() {
        if(this.side1 != this.side2 && this.side2 != this.side3 && this.side3 != this.side1) {
            return true;
        } else {
            return false;
        }
    }

    validate() {
        this.isValidScalene = this.isScalene();
    }
}

class Isosceles extends Scalene {
    constructor(side1,side2,side3){
        super(side1,side2,side3);
    }

    isIsosceles() {
        if((this.side1 == this.side2 || this.side2 === this.side3 || this.side1 === this.side3) && this.hasValidSideLengths()) {
            return true;
        } else {
            return false;
        }
    }

    validate() {
        this.isValidIsosceles = this.isIsosceles();
    }
}

module.exports = {Triangle, Scalene, Isosceles};
