// // Javascript Modules

// // JavaScript modules provide a way to organize, structure, and share code in maintainable and reusable ways. Modern JavaScript supports several module systems, each serving different environments and use cases


// //modules are reusable pieces of code that can be imported and exported between different files or scripts. They help in organizing code, avoiding global scope pollution, and enabling better maintainability.


// //ES6 Modules (ESM)
// // ES6 modules are the standard module system in modern JavaScript, allowing developers to export and import code between files using the `export` and `import` keywords. This system is supported natively in browsers and Node.js.

// // math.js
// export const deepi = 3.14159;
// export function addd(a, b) {
//     return a + b;
// }
// // export class Calculator {
// //     multiply(a, b) {
// //         return a * b;
// //     }
// // }


// // random() Math.random()
// // main.js
// import { PI, add, Calculator } from './math.js';
// console.log(add(2, 3)); // 5


// //default exports
// // A module can have a default export, which allows importing without curly braces.
// // defaultExport.js
// export default function greet(name) {
//     return `Hello, ${name}!`;
// }   

// // main.js
// import greet from './defaultExport.js';
// console.log(greet('Alice')); // Hello, Alice!

// //mixed exports
// // A module can have both named and default exports.

// // utilities.js
// export const version = '1.0.0';
// export function formatDate(date) {
//     return date.toISOString();
// }
// export default class ApiClient {
//     constructor(baseUrl) {
//         this.baseUrl = baseUrl;
//     }
// }

// // main.js
// import ApiClient, { version, formatDate } from './utilities.js';


// //Common Js exports
// // CommonJS is the module system used in Node.js, where modules are defined using `module

// // helpers.js
const crypto = require('crypto');

export default function generateId() {
    return crypto.randomBytes(16).toString('hex');
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = {

    validateEmail
};


// //import { this } from 'helpers.js'; // This is incorrect in CommonJS
// // app.js
// const { generateId, validateEmail } = require('./helpers');
// console.log(generateId()); // Random hex string
