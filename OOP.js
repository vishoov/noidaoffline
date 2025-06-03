class Animal {
    constructor(name, age, breed){
       this.Animalname= name;
        this.Animalage=age;
        this.Animalbreed=breed;
    }
}


// const arr = [1, 234, 4]
const arr = new Array(1, 234, 4)
console.log(arr);
// const str = new String("Hello World");

let animal1 = new Animal( 5,"Dog", "Labrador","Golden Retriever");
let animal2 = new Animal("Cat", 3);
console.log(animal1);
console.log(animal2);


const animal3 = {
    name: "Elephant",
    age: 10,
    breed: "African"
}

console.log(animal3);

