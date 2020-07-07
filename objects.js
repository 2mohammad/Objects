
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'Beep';
    }
    toString(){
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM';
    }
}

class Garage{
    constructor(fit){
        this.fit = fit;
        this.vehicles = [];
    }
    add(obj){
        if (this.vehicles.length < this.fit){
            this.vehicles.push(obj);
            console.log('added');
        }
        else{
            console.log("Sorry, we're full");
        }

    }
}
const a = new Car();
console.log(a.numWheels);

const b = new Motorcycle();
console.log(b.numWheels, b.revEngine());