// Parent class
class Animal {
    makeSound() {
      return "Some generic animal sound";
    }
    greet(){
        console.log("Hello from the animal kingdom!");
    }
  }
  
  // Child classes with overridden methods
  class Dog extends Animal {
    makeSound() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      return "Meow!";
    }
  }
  

  // Using polymorphism with different objects
  const dog = new Dog();
  const cat = new Cat();
  const genericAnimal = new Animal();
  

  function animalSound(animal){
    console.log(animal.makeSound());
  }

animalSound(dog); // Outputs: Woof!
animalSound(cat); // Outputs: Meow!
animalSound(genericAnimal); // Outputs: Some generic animal sound


class Product{
    discount(couponcode){
        if(couponcode === "SAVE10") {
            return "10% discount applied!";
        }
        else if(couponcode === "SAVE20") {
            return "20% discount applied!";
        } else {
            return "No discount available.";
        }
    }
}

)