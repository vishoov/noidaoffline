// //Node package manager
// // npm is a package manager for JavaScript, primarily used for managing packages in Node.js applications. It allows developers to install, share, and manage dependencies in their projects.

// //it helps in managing libraries and tools in JavaScript projects, making it easier to share code and collaborate with others.

// // npm is the default package manager for Node.js, and it comes bundled with Node.js installations. It provides a command-line interface (CLI) for managing packages, including installing, updating, and removing them.

// // CommonJS module
// // const var = require('npm');``
// // module.exports = npm;

// //ES6 Module
// // import { npm } from 'assert'

// // export variable
// // export defailt module





// //Question

// //1. import utils from './utils.js';
// //2. export defailt utils
// //3. type: "module"


// //includes 

// if(!Array.prototype.includes){
// //define method
//     Array.prototype.includes  = function(value){
//         for(var i=0; i<this.length; i++){
//             if(this[i]===value){
//                 return true;
//             }
//         }
//         return false;
//     }
// }else{
//     console.log("includes method already exists");
// }

// let arr = [1, 2, 3, 4, 5];
// arr.includes(3)


//define an array class 
//empty 
//predefine elements seed 

class CustomArray{
    constructor(...elements){
        this.data = {};
        this.length = 0;

        for(let i=0; i<elements.length; i++){
            this.data[i] = elements[i];
            this.length++;
        }
    }

    length(){
        return this.length;
    }

    get(index){
        return this.data[index];
    }
}

const newArray = new CustomArray(1,2,3,4,5,6);
console.log(newArray.length)


function printelements(){
    return arguments;
}



console.log(printelements(1,2,3,4,5,6))

let user = {
    name: "John",
    age: 30,
    email: ""
}


console.log(Object.keys(user).length);

let string = "Hello, World!";
console.log(string.length);