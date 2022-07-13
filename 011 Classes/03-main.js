// function Car(image, manufacturer) {
//     this.image = image;
//     this.manufacturer = manufacturer;
//     this.html = `<img src="images/${this.image}" /><br />Производитель: ${this.manufacturer}<br />`;
// }
//
// let car1 = new Car("audi-a6-250.jpg", "Audi");
// let car2 = new Car("jaguar-x-type-250.jpg", "Jaguar");
// let car3 = new Car("porsche-carrera-911-250.jpg", "Porsce");
//
// let placeholder1 = document.querySelector("#placeholder1");
// let placeholder2 = document.querySelector("#placeholder2");
// let placeholder3 = document.querySelector("#placeholder3");
//
// placeholder1.innerHTML = car1.html;
// placeholder2.innerHTML = car2.html;
// placeholder3.innerHTML = car3.html;

    class Car {
        #image;
        #manufacturer;
        // #html;

        constructor(image, manufacturer) {
        this.#image = image;
        this.#manufacturer = manufacturer;
        }

        get image() {
            return this.#image;
        }

        // set image(value) {
        //     this.#image = value;
        // }

        get manufacturer() {
            return this.#manufacturer;
        }

        // set manufacturer(value) {
        //     this.#manufacturer = value;
        // }

        get html() {
            return `<img src="images/${this.image}" /><br />Производитель: ${this.manufacturer}<br />`;
        }


    }
let car1 = new Car("audi-a6-250.jpg", "Audi");
let car2 = new Car("jaguar-x-type-250.jpg", "Jaguar");
let car3 = new Car("porsche-carrera-911-250.jpg", "Porsce");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

placeholder1.innerHTML = car1.html;
placeholder2.innerHTML = car2.html;
placeholder3.innerHTML = car3.html;