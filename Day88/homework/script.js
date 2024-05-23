// const cars = ["red","blue","red","red"];

// const allRed = cars.every(function(value){
//     return allRed === value
// });

// function ManualEvery(cars, func){
//     for(let i = 0; i < cars.length ; i++){
//         const isTrue = func(cars[i]);
//         if(isTrue === false){
//             return false
//         }
//     }
//     return true
// }

// const allRed = ManualEvery(cars, function(value){
//     return value === "red"
// })

// console.log(allRed)  


// const accounts = [
//     {
//         name : 'luka',
//         age : 16
//     },
//     {
//         name: 'nika',
//         age: 13
//     },
//     {
//         name : 'vaso',
//         age: 18,
//     },
//     {
//         name : 'vaso',
//         age:21,
//     },
// ];

// const everyadult = accounts.some(function(accounts){
//     return accounts.age >= 18
// });
// console.log(everyadult)


// const ManualFind = function(arr,func){
//     for (let index = 0; index < arr.length; index++){
//         const isTrue = func(arr[index])
//         if(isTrue === true){
//             return arr[index]
//         }

//     }
// };


// const FirstAdult = ManualFind(accounts, function(acc){
//     return acc.age >= 18
// });
// console.log(FirstAdult)



// const ToFindIndex = accounts.findIndex(function(accounts){
//     return accounts.age >= 18
// });



// const exactage = 18

// const accounts = [
//     {
//         name : 'luka',
//         age : 16
//     },
//     {
//         name: 'nika',
//         age: 13
//     },
//     {
//         name : 'vaso',
//         age: 18,
//     },
//     {
//         name : 'vaso',
//         age:21,
//     },
// ];

// const exact = accounts.find(function(acc){
//     return acc.age === exactage;
// })

// console.log(exact)


// const fruits = ["Banana","Apple","Orange","Peach"]

// const [firstfruit, ...secondfruit] = fruits
// console.log(...firstfruit, ... secondfruit)



// const person = {
//     name: "luka",
//     money : 100,
// }

// const {money,name} = person


// const cars = ["bmw","volvo","miniwen"];
// const [...third] = cars

