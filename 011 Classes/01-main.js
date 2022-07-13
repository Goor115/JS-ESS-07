// function Car(model, yaer) {
//     this.yaer = yaer;
//     this.model = model;
// }
//
// Car.prototype.showInfo = function () {
//     console.log(this.model + " " + this.yaer);
// }
//
// let car1 = new Car("Audi", 2018);
// car1.showInfo()

class Car {
    constructor(model, yaer) {
        this.yaer = yaer;
        this.model = model;
    }

    showInfo() {
        console.log(this.model + " " + this.yaer);
    }
}


let car1 = new Car("Audi", 2018);
car1.showInfo();