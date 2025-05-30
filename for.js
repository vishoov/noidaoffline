const cars = ["BMW", "Volvo", "Mini", "Merc", "Porsche"];
//traditional for loop -> iteration 
for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}




const person = {
    name: "John",
    age: 30,
    city: "New York"
}

// for in loop -> iteration over object properties
for(let key in person){
    let value = person[key];
    console.log(key + ": " + value);
}

// for of loop -> iteration over iterable objects (like arrays)
for(let car of cars){
    car = car.toUpperCase(); // converting to uppercase
    console.log(car);
}

// forEach loop -> iteration over arrays with a callback function
cars.forEach(function(element, index){
    console.log("Index: " + index + ", Element: " + element);
})


function A(inputA, inputB, inputC){
    if(!inputB && !inputC){
        console.log('function A called with input:', inputA);
    }
    else if(inputB && inputA && !inputC){
        console.log('function B called with inputs:', inputA, inputB);
    }
    else{
        console.log('function C called with inputs:', inputA, inputB, inputC);
    }
   
}

A(1);
A(1,2);
A(1,2,3);


const fruits = [ "Apple", "Banana", "Cherry", "Date", "Elderberry" ];

fruits.forEach((fruit, index)=>{
    if(index>2){
        return;
    }
    console.log(index, fruit )
})