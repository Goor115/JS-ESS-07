class Сylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    getVolume() {
        console.log(Math.PI * Math.pow(this.radius, 2) * this.height);
    }
}
let cylinder1 = new Сylinder(2, 5);
let cylinder2 = new Сylinder(10, 9);

cylinder1.getVolume();
cylinder2.getVolume();