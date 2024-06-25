// Basic Promise Creation


//1
// Create a simple promise that resolves with a message "Hello, World!" after 2 seconds.
// Handling Rejection


//2
// Create a promise that rejects with an error message "Something went wrong!" after 3 seconds. Handle the rejection using .catch().
// Chaining Promises


//3
// Create a promise that resolves with the number 5. Chain another promise to it that adds 10 to the number and resolves with the new value.
// Using then for Success Handling


//4
// Create a promise that resolves with an array of numbers. Use .then() to log each number to the console.
// Multiple then Chaining



//5
// Create a promise that resolves with a string. Chain multiple .then() handlers to transform the string in various ways (e.g., uppercase, reverse, add prefix).
// Promise with Fetch


//6
// Use the Fetch API to get data from an API endpoint. Handle the promise returned by fetch() to parse and log the JSON response.
// Sequential Promises

//7
// Create two promises that resolve with different messages. Chain them so that the second promise starts only after the first one resolves. Log both messages.




//1 
// const Promiseresolve = new Promise ((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("Hello, World!");
//     },2000);
// });

// Promiseresolve
//    .then(message =>{
//     console.log(message)
//    });






//2 

// const promiserejected =  new Promise((reject) =>{
//     setTimeout(()=>{
//         reject("Something went wrong");
//     },3000);
// });

// promiserejected
//     .catch(rejection =>{
//         console.log(rejection)
//     });




//3


// const FirstPromise = new Promise((resolve,reject)=>{
//     resolve(5);
// });
// FirstPromise
//     .then((Number)=>{
//         const Newnumber = Number + 10;
//         return Newnumber
//     })
//     .then((finalnumber)=>{
//         console.log(finalnumber)
//     })


//4
// const PromiseOfarray = new Promise((resolve,reject)=>{
//     const numbers = [2,1,9,3,4]
//     resolve(numbers)
// });


// PromiseOfarray
//     .then(numbers => {
//         for(let i = 0; i < numbers.length; i++){
//             console.log(numbers[i]);
//         }
//     })




//5
// new Transformer = new Promise((resolve)=>{
//     somethingstring = "makaka"
//     resolve(somethingstring)
// });

// Transformer
//     .then(transformed => {
//         return transformed.toUpperCase();
//     })
//     .then(transformed =>{
//         console.log(transformed)
//     })


//6 

// const store = 'https://fakestoreapi.com'

// fetch(store)
//     .then(data =>{
//         console.log(data)
//     })


//7

// const firstpromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("first promise")
//     },1000);
// });

// const secondpromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("second promise")
//     },600);
// });


// firstpromise
//     .then((firstmessage)=>{
//         console.log(firstmessage)
//         return secondpromise
//     })
//     .then((secondmessage)=>{
//         console.log(secondmessage)  
//     })




//additional made by me  

const promises = new Promise((resolve,reject)=>{
    resolve("PROMISE IS GOATED")
});


promises
    .then((string)=>{
        const newstring = string.toLowerCase();
        console.log(newstring)
    });
    