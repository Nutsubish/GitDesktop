// // Assign

// // 1
// const person = { 
//     name: "John",
//     age: 30 
// };
// const employee = Object.assign({}, person, { position: "FULLSTACKDEVELOPER!" });
// console.log(employee); 

// // 2
// const obj1 = { 
//     a: 1,
//     b: 2 
// };
// const obj2 = { 
//     b: 3,
//      c: 4 
//     };
// const merged = Object.assign({}, obj1, obj2);
// console.log(merged); 

// // 3
// const useing = {};
// const jemala = { 
//     a: 1 
// };
// const vaso = { 
//     b: 2 
// };
// const babo = {
//      c: 3 
// };
// Object.assign(useing, jemala, vaso, babo);
// console.log(useing);

// // 4
// const original = { 
//     a: 1,
//     b: 2 
// };
// const clone = Object.assign({}, original);
// console.log(clone); 

// // 5

// const babu = { 
//     a: 1, 
//     b: 2 
// };
// const bebo = { 
//     b: 3,
//     c: 4 
// };
// Object.assign(babu, bebo);
// console.log(babu); 

// // 6.
// const arr = [
//     { 
//         a: 1 
//     }, 
//     { 
//         b: 2
//     }, 
//     { 
//         c: 3
//     }
// ];
// const mergedArr = Object.assign({}, ...arr);
// console.log(mergedArr); 

// // 7. 
// const existing = { a: 1, b: 2 };
// const updates = { b: 3, c: 4 };
// Object.assign(existing, updates);
// console.log(existing); 

// // 8. 
// function extend(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }
// const result = extend({ a: 1 }, { b: 2 });
// console.log(result); 

// // 9.
// function manualAssign(using, ...somethingss) {
//     somethingss.forEach(thing => {
//         for (let key in thing) {
//             using[key] = thing[key];
//         }
//     });
//     return using;
// }
// const using3 = {};
// const thing4 = { a: 1 };
// const thing5 = { b: 2 };
// const result2 = manualAssign(using3, thing4, thing5);
// console.log(result2); 

// // 10. 
// function manualAssign2(useing, ...somethings) {
//     for (const thing of somethings) {
//         for (const key in thing) {
//             useing[key] = thing[key];
//         }
//     }
//     return useing;
// }

// const useing4 = {};
// const thing6 = { a: 1 };
// const thing7 = { b: 2 };
// const result3 = manualAssign2(useing4, thing6, thing7);
// console.log(result3)
// // Rest

// // 1
// const [first, second, ...restArr] = [1, 2, 3, 4, 5];
// console.log(restArr); 

// // 2. 
// function collectArgs(first, second, ...rest) {
//     console.log(rest);
// }
// collectArgs(1, 2, 3, 4, 5); 


// function sum(...args) {
//     return args.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10

// // 4. 
// function forward(...args) {
//     anotherFunction(...args);
// }

// function anotherFunction(a, b, c) {
//     console.log(a, b, c);
// }

// forward(1, 2, 3); 

// // 5. 
// const { a, b, ...restObj } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(restObj); 
