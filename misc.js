// Polyfills


// Check if the method doesn't exist
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement, fromIndex) {
        'use strict';
        
        // Handle edge cases
        if (this == null) {
            throw new TypeError('Array.prototype.includes called on null or undefined');
        }
        
        const obj = Object(this);
        const len = parseInt(obj.length) || 0;
        
        if (len === 0) return false;
        
        const n = parseInt(fromIndex) || 0;
        let k = (n >= 0 ? n : Math.max(len + n, 0));
        
        // Search for the element
        for (; k < len; k++) {
            if (obj[k] === searchElement) {
                return true;
            }
        }
        
        return false;
    };
} else{
    // If the method exists, we can log a message or do nothing
    console.log('Array.prototype.includes already exists.');
    // console.log(Array.prototype.includes.toString());
}

// Usage
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false


// A polyfill is a piece of code (usually JavaScript) used to provide modern functionality on older browsers that do not natively support it. The term was coined by Remy Sharp and represents a way to "fill in" missing features in browsers.

// Polyfills work by checking if a feature exists in the current environment and, if not, implementing the feature using older, more widely supported JavaScript methods. They essentially bridge the gap between modern JavaScript features and older browser implementations.

// Key Characteristics:

// Conditional Implementation: Only loads when the feature is missing

// Standards Compliance: Follows the exact specification of the native implementation

// Performance Consideration: Native implementations are faster than polyfills

// Compatibility Layer: Enables modern code to run on older environments



if(!Promise.all){
    Promise.all= function (promises){
        return new Promise ((resolve, reject)=>{
            if (!Array.isArray(promises)) {
                return reject(new TypeError('Promise.all accepts an array'));
            }

            let resolvedCount = 0;
            const results = new Array(promises.length);

            if (promises.length === 0) {
                return resolve(results);
            }

            promises.forEach((promise, index) => {
                Promise.resolve(promise).then(value => {
                    results[index] = value;
                    resolvedCount++;
                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                }, reject);
            });
        })
    }
}

//suppose a browser does not support array.map 
if(!Array.prototype.map){
    Array.prototype.map= function(callback, thisArg){

        if(typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

    }
}


let ar=[1,2,3,4,5]
arr.map((item, index)=>{
    console.log(item, index);
    return item * 2;
});

//Applications
// Legacy Browser Support: Enable modern JavaScript features in Internet Explorer and older browsers

// API Compatibility: Provide missing browser APIs like fetch, IntersectionObserver

// Method Standardization: Ensure consistent behavior across different browser implementations

// Progressive Enhancement: Allow developers to use cutting-edge features while maintaining backward compatibility









// Currying 

// f(a, b, c) 

//f(a)(b)(c)

// false(a, b, c)=f(a)f(b)f(c)=f(a)(b)(c)


//const addFive = outerFunction(5);
// console.log(addFive(3))

//Normal Function
// function add(a, b){
//     return a + b;
// }


//curry function
function curryadd(a){
    function inner(b){
        return a + b;
    }
    return inner;
}

const addFive = curryadd(5);
console.log(addFive(3)); // 8


// Currying is a functional programming technique that transforms a function with multiple arguments into a series of functions, each taking a single argument. Named after mathematician Haskell Curry, this technique converts a function from f(a, b, c) into f(a)(b)(c).

// Core Principles:

// Single Argument Functions: Each function in the chain takes exactly one argument

// Function Composition: Enables building complex functions from simpler ones

// Partial Application: Allows creating specialized functions with preset arguments

// Lazy Evaluation: Functions are not executed until all arguments are provided


function curryClickListener(element) {
    return function(click) {
        return function(callback) {
            element.addEventListener(eventType, callback);
        };
    };
}

// Usage example:
const button = document.querySelector('button');
const addClickListener = curryClickListener(button);

const clicker = addClickListener('click')

clicker(function() {
    console.log('Button clicked!');
});