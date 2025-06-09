// class Animal {
//     constructor(name, age, breed){
//        this.Animalname= name;
//         this.Animalage=age;
//         this.Animalbreed=breed;
//     }
// }

//class vehicle
// type
// VideoColorSpacecompany
// makeyear
// fuel type
class Vehicle{
    constructor(type, color, makeyear, fueltype){
        this.type=type;
        this.color=color;
        this.makeyear=makeyear;
        this.fueltype=fueltype;
    }
    // method to display vehicle details
    getVehicleDetails(){
        console.log( `Vehicle Detailes : Type: ${this.type}, Color: ${this.color}, Make Year: ${this.makeyear}, Fuel Type: ${this.fueltype}`);
    }
    // method to change fuel type
    changeFuelType(newFuelType) {
        this.fueltype = newFuelType;
        console.log(`Fuel type changed to: ${this.fueltype}`);
    }
}

const bike= new Vehicle("Bike", "Red", 2020, "Petrol");
console.log(bike);
bike.getVehicleDetails()
bike.changeFuelType("Electric");
console.log(bike)
bike.getVehicleDetails();
//suppose you are building excalidraw 
//class tool 
//pen, square, text, circle, undo, redo


// const arr = [1, 234, 4]
const arr = new Array(1, 234, 4)
// console.log(arr);
// const str = new String("Hello World");

// let animal1 = new Animal( 5,"Dog", "Labrador","Golden Retriever");
// let animal2 = new Animal("Cat", 3);
// console.log(animal1);
// console.log(animal2);


// const animal3 = {
//     name: "Elephant",
//     age: 10,
//     breed: "African"
// }

// console.log(animal3);

//encapsulation

// function createCounter(){
//     let count =0; //private variable

//     function increment(){
//         count++;
//         console.log(count);
//     }
//     // increment();
//     // increment();
//     // count=100;
//     // increment();
//     return increment
// }

// createCounter -> count -> incrmrement -> call -> cunt++ -> count console

// const haha = createCounter();

// count();
// count();
// haha();
// count=100;
// haha();



//create a user class with values name, DOB, email, ph
//method -> getContact-> email, phone
//getAge-> age calculate 

    const password = 'deepanshu'


class Car {
    #brand = "Tata"; //private variable
    #name="Nexon";
    #mileage=16;

    getMileage(){
        return this.#mileage;
    }
    //getter function 
    get brand(){
       
        
        console.log("getter called")
        return this.#brand;
    }

    set brand(newbrand){
        this.#brand=newbrand;
    }

    setMileage(arg){
        this.#mileage=arg;

    }
}

let nexon = new Car();
// console.log(nexon.brand);
// console.log(nexon.getMileage())
// nexon.setMileage(100);
// console.log(nexon.getMileage())
// nexon.brand="Lambo";
// console.log(nexon);
console.log(nexon.brand);


// nexon.getMileage(); //method
// nexon.brand;  //getter

nexon.brand="Lambo"
console.log(nexon.brand);


//define a user class 
//name -> public
//age -> public
//email -> public
//ph -> private but it can be accessed but not modified
//password -> private
//address -> accessed but no modification




class User{
    //public properties
    name
    age;
    email;
    //private properties
    #ph; //private property
    #password; //private property
    #address //private property

    constructor(name, age, email, ph, password, address){
        this.name = name; //public property
        this.age = age; //public property
        this.email = email; //public property
        this.#ph = ph; //private property
        this.#password = password; //private property
        this.#address = address; //private property
    }



    get ph(){
        return this.#ph; //getter for private property
    }
    get address(){
        return this.#address; //getter for private property
    }

    set address(newAddress){
        this.#address = newAddress; //setter for private property
    }

}

let deepanshu = new User();
console.log(deepanshu.name); //public property
deepanshu.name="Rahul"
console.log(deepanshu.name); //public property
console.log(deepanshu.ph); //public property
deepanshu.ph=9876543210; //trying to modify private property (will not work)
console.log(deepanshu.ph); //still will show the original value
console.log(deepanshu)

//inheritance

class Person{
    constructor(objectname){
        this.name=objectname;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}


class Student extends Person{

    constructor(name, studentId){
        super(name); // Call the constructor of the parent class
        this.studentId = studentId; // Additional property for Student
    }
}

class abc extends Student{
    constructor(name, studentId, course){
        super(name, studentId); // Call the constructor of the parent class
        this.course = course; // Additional property for abc
    }
}



const student1 = new Student("Alice", "S12345");
console.log(student1); // Accessing inherited property
const student2= new abc("Bob", "S67890", "Math");
student2.greet();

//animal

//water -> shark 
//land -> elephant

class Animal {
    constructor(name){
        this.name=name;
    }

    greet(){
        console.log(`This animal is ${this.name}`)
    }
}

class waterAnimal extends Animal   {
    constructor(name, color){
        super(name);
        this.color=color;
    }

}

class landAnimal extends Animal{
    constructor(name, legs){
        super(name);
        this.legs=legs
    }
}

// function greetAnimal(animal) {
//     console.log(`This animal is ${animal.name}`);
// }


function greetAnimal(animal) {
    if (animal instanceof waterAnimal) {
        console.log(`This is a water animal named ${animal.name} and its color is ${animal.color}`);
    } else if (animal instanceof landAnimal) {
        console.log(`This is a land animal named ${animal.name} and it has ${animal.legs} legs`);
    } else {
        console.log(`This is an animal named ${animal.name}`);
    }
}


const shark = new waterAnimal("Shark", "Grey");
shark.greet();
const elephant = new landAnimal("Elephant", 4);
elephant.greet();
greetAnimal(shark);
greetAnimal(elephant);


//products

//fashion, makeup, electronics, furniture

// function discountPrice(nailpaint){
//     if(nailpaint instanceof Makeup){
//         return nailpaint.price * 0.9; // 10% discount
//     }else {
//         return nailpaint.price; // no discount
//     }
// }

//vehicle -> drive() -> Driving a vehicle 
//car -> drive() -> Driving a car

//bicycle -> drive()-> Riding a bicycle