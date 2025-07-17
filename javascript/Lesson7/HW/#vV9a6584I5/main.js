function Car(model, prod, year, maxspeed, envolume){
    this.model = model
    this.prod = prod
    this.year = year
    this.maxspeed = maxspeed
    this.envolume = envolume
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };
    this.info = function (){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (NewSpeed){
        if (NewSpeed > 0) this.maxspeed = this.maxspeed + NewSpeed;
    };
    this.changeYear = function (year){
        if (year > 1815) this.year = year;
    };
    this.addDriver = function (driver){
        if (driver) this.driver = driver;
    };
}
const car = new Car (`asdsf`, `ewrds`, 2020, 220, 4)
console.log(car);
car.drive();
car.increaseMaxSpeed(100);
car.changeYear(1923);
car.addDriver({});
car.info