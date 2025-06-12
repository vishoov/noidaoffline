// //Promise -> is a function that helps us implement any function that depends on another party, 

// //Promise -> that i will come on time

// //pending 
// //fulfilled 
// //rejected


// // const promiseOne = new Promise(
// //     function(resolve, reject){
// //         //any asynchronous task
// //         //DB fetch, password encryption, networking 
// //         setTimeout(function(){
// //             // // const response = fetch()
// //             // if(response){
// //             //     resolve()
// //             // }else{
// //             //     reject()
// //             // }


// //             console.log('Async task completed');
// //             resolve();
// //         }, 1000)
// //     }
// // )

// // //resolve and reject
// // console.log(promiseOne)
// // promiseOne.then(
// //     function(){
// //         console.log("Promise consumed")
// //     }
// // )
// // console.log(promiseOne)
// // setTimeout(()=>{
// //     console.log(promiseOne)
// // }, 2000)


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


// // A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// // This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// // A Promise is in one of these states:

// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.
// // // rejected: meaning that the operation failed.


// // The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// // A promise is said to be settled if it is either fulfilled or rejected, but not pending.



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

// oddoreven(0).then(console.log).catch(console.log)




const promiseThree = new Promise(
    function(resolve, reject){
        let error = false;
        if(!error){
            resolve({username:"Accio", password:"123"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }
).then(
    (data)=>{
        console.log(data)
        return data.username;
    }
).then((username)=>{
    console.log(username)
})
.catch(function(){
    console.log("Promise Rejected")
})
.finally(()=> console.log('Something happened for sure'))



const double = (x) => Promise.resolve(x * 2);
const addTen = (x) => Promise.resolve(x + 10);
const multiplyByThree = (x) => Promise.resolve(x * 3);

double(49549564)
  .then(addTen)
  .then(multiplyByThree)
  .then(console.log); // Output: 60
