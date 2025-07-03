// // //Promise -> is a function that helps us implement any function that depends on another party, 

// // //Promise -> that i will come on time

// // //pending 
// // //fulfilled 
// // //rejected


//  const promiseOne = new Promise(
//      function(resolve, reject){
//          //any asynchronous task
//          //DB fetch, password encryption, networking 
//          setTimeout(function(){
//                 const response = false;
//              if(response){
//                  resolve("Promise resolved successfully")
//              }else{
//                  reject("Promise rejected due to response being false")
//             }


           
//         }, 1000)
//     }
// )

// //resolve and reject
// console.log(promiseOne)
// promiseOne.then(
//     function(){
//         console.log("Promise consumed")
//     }
// )
// promiseOne.catch(function(err){

//     console.log(err);
        
    
// })
// console.log(promiseOne)
// setTimeout(()=>{
//     console.log(promiseOne)
// }, 2000)


// const promisetwo = new Promise(
//     function(resolve, reject){
//         let error = false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     }
// ).then(
//     function(){
//         console.log("Promise Resolved")
//     }
// ).catch(function(){
//     console.log("Promise Rejected")
// })


// // // A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// // // This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// // // A Promise is in one of these states:

// // // pending: initial state, neither fulfilled nor rejected.
// // // fulfilled: meaning that the operation was completed successfully.
// // // // rejected: meaning that the operation failed.


// // // The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// // // A promise is said to be settled if it is either fulfilled or rejected, but not pending.



// function oddoreven(num){
//     //even -> wow, the number is even
//     //odd -> oh no, this is odd 
//     const value =new Promise((resolve, reject)=>{
//         if(num%2==0){
//             resolve(`Wow, ${num} is even`)
//         }else{
//             reject(`Oh no, ${num} is odd`)
//         }
//     })
//     return value;
// }

// oddoreven(595985985985)
// .then(console.log)
// .catch(console.log)


// 'hello my name is abc '

// const promiseThree = new Promise(
//     function(resolve, reject){
//         let error = false;
//         if(!error){
//             resolve({username:"Accio", password:"123"});
//         }
//         else{
//             reject('ERROR: Something went wrong');
//         }
//     }
// ).then(
//     (data)=>{
//         console.log(data)
//         return data.username;
//     }
// ).then((username)=>{
//     console.log(username)
// })
// .catch(function(){
//     console.log("Promise Rejected")
// })
// .finally(()=> console.log('Something happened for sure'))



// // const double = (x) => Promise.resolve(x * 2);
// // const addTen = (x) => Promise.resolve(x + 10);
// // const multiplyByThree = (x) => Promise.resolve(x * 3);

// // double(49549564)
// //   .then(addTen)
// //   .then(multiplyByThree)
// //   .then(console.log); // Output: 60



// //   try{
//         // logic  -> pass/fail 
// //   }
// //   catch(err){
// // catches the error
// //   }
// //   finally{
// //the code execution is completed
// //   }


// function api() {
//     let value = 0;
//     try{
//         if(value==10){
//             console.log("success");
//         }else{
//             throw new Error("Failed")
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
//     console.log("inside code")

// }

// api()
// console.log("outside code")

// Promise.resolve()
// .then(()=>console.log(1));

// setTimeout(()=>console.log(2), 10);

// queueMicrotask(()=>{
//     console.log(3);
//     queueMicrotask(()=>console.log(4))
// })


// console.log(5);


//rahuls -> 1 5 3 4 2
//shishir -> 5 1 3 4 2 
//akash -> 5 1 3 4 2
//deepanshu -> 1 3 2 4 5  
//divya -> 1 3 4  5 2 
//shashikant -> 5 1 3 2 4
//arbaaj -> 5 1 3 4 2 
//atul -> 1 3 4 5 2 

// function printNumbers(data) {
//     console.log(data);
// }


// printNumbers({
//     num: 1
// });

// let count =0;
// count++;
// function a(){
//     // let count = 10;
// console.log("inside a", count);
//     function b(){
//         count++;
//         console.log("inside b", count);
//     }
//     b()
// }
// console.log(count, "outside count");
// a()

// A closure in JavaScript is a function that remembers and can access its lexical scope, even when that function is executed outside of its original lexical scope. 



// function outer() {
//     let x = 10;
//     function inner() {
//       console.log(x);
//     }
//     return inner;
//   }
  
//   const myFunc = outer();
//   myFunc();
  

//   let x = 1;
// function outer() {
//   let x = 2;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }
// const func = outer();
// func();


// function createAsyncFunctions() {
//     let functions = [];
//     for (let i = 0; i < 3; i++) {
//       functions.push(function haha() {
//         setTimeout(() => console.log(i), 1000);
//       });
//     }
//     return functions;
//   }
  
//   const asyncFuncs = createAsyncFunctions();
//   console.log(asyncFuncs);
//   asyncFuncs.forEach(func => func());
  

  //Promises Methods

//   const promise1 = Promise.resolve(3);
//   const promise2 = 42;
//   const promise3= new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'foo');
//   });

// Promise.all([promise1, promise2, promise3]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.log(err);
// })

// promise1.then((value)=>{
//     console.log(value);
// }).then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });


// promise1.then((value)=>{
//     console.log(value);
//     return value + 1;
// })
// console.log(promise2)
// promise3.then((value)=>{
//     console.log(value);
//     return value + 1;
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("All promises are done");
// });

//Promise.all -> input an iterable of promises and returns a single promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.

//Promise.all returns 
//A Promise that is:

// Already fulfilled, if the iterable passed is empty.

// Asynchronously fulfilled, when all the promises in the given iterable fulfill. The fulfillment value is an array of fulfillment values, in the order of the promises passed, regardless of completion order. If the iterable passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.
// Asynchronously rejected, when any of the promises in the given iterable rejects. The rejection reason is the rejection reason of the first promise that was rejected.


//promise.allSettled()

//Promise.allSettled -> input an iterable of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

// const promiseA= Promise.resolve(3);
// const promiseB = new Promise((resolve, reject)=>{
//     setTimeout(reject, 100, "This promise was rejected after 100ms");
//     //setTimeout(arguments, delay, value)
// })
// const promiseC = 42;

// const promises = [promiseA, promiseB, promiseC];


// Promise.allSettled(promises).then((results)=>{
//     results.forEach((result)=> console.log(result.value || result.reason, ));
// }).catch((err)=>{
//     console.log(err);
// })


// const promiseA = Promise.reject(new Error("Error"));
// const promiseB = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "This promise was resolved after 100ms");
// });
// const promiseC= new Promise(((resolve, reject)=>{
//     setTimeout(resolve, 2000, "This promise was resolved after 200ms");
// }))

// const promises = [promiseA, promiseB, promiseC];


// Promise.any(promises).then((value)=>{
//     console.log(value);
// })


//Promise.race()

// const promise1= new Promise((resolve, reject)=>{
//     setTimeout(resolve, 100, "Promise 1 resolved after 100ms");
// });

// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(reject, 0, "Promise 2 resolved after 200ms");
// });

// Promise.race([promise1, promise2]).then((value)=>{
//     console.log(value);
// })

// // A Promise that asynchronously settles with the eventual state of the first promise in the iterable to settle. In other words, it fulfills if the first promise to settle is fulfilled, and rejects if the first promise to settle is rejected. The returned promise remains pending forever if the iterable passed is empty. If the iterable passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) settled.

//Promise.all -> wants every promise to be resolved
//Promise.allSettled -> wants every promise to be settled (resolved or rejected)
//Promise.any -> wants at least one promise to be resolved  
//Promise.race -> wants the first promise to be settled (resolved or rejected)



//STARVATION OF FUNCTIONS IN CALLBACK QUEUE 

// SYNCHRONOUS CODE
//PROMISE 
//CALLBACK FUNCTION


// IN THE EVENT LOOP, WRITE THE PRIORITY WISE EXECUTION OF THE CODE
// 1. Synchronous code
// 2. Microtasks (Promises, MutationObserver)
// 3. Macrotasks (CALLBACK FUNCTIONS) (setTimeout, setInterval, I/O operations)

// setTimeout(() => {
//     console.log("setTimeout 1");
// }, 1000);

// promise1.then(() => {
//     console.log("Promise 1 resolved");
// }); //this response comes after 4 seconds 


// setTimeout(() => {
//     console.log("setTimeout 3");
// }, 1000);

// setTimeout(() => {
//     console.log("setTimeout 2");
// }, 0);

// for(let i = 0; i < 1000000000; i++) {
//     // Simulating a long-running synchronous task
//     if(i === 999999999) {
//         console.log("Long-running task completed");
//     }
// }


// import { addd, deepi } from './modules.js';



// console.log("Value of PI:", deepi);
// console.log("Sum of 2 and 3:", addd(2, 3));


const { validateEmail } = require('./modules.js');
import generateId from './modules.js';
console.log("Generated ID:", generateId());
console.log("Is valid email:", validateEmail("haha@haha.com"))