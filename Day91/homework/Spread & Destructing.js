// Spread

//1
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray); // [1, 2, 3, 4, 5, 6]



//2
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject); // { a: 1, b: 3, c: 4 }


//3
// const arr = [1, 2, 3];
// const modifiedArray = [...arr, 4, 5];
// console.log(modifiedArray); // [1, 2, 3, 4, 5]




//4
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); // [1, 2, 3]


//5
// const str = "hello";
// const charArray = [...str];
// console.log(charArray); // ['h', 'e', 'l', 'l', 'o']


// Destructuring


//1
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c); // 1 2 3






//2
// const obj = { x: 1, y: 2 };
// const { x, y } = obj;
// console.log(x, y); // 1 2


//3
// const obj = { x: 1, y: 2 };
// const { x: newX, y: newY } = obj;
// console.log(newX, newY); // 1 2


//4
//const arr = [1, 2, 3, 4, 5];
// const [first, , third, , fifth] = arr;
// console.log(first, third, fifth); // 1 3 5


//5
// const arrOfObjects = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
// for (const { a, b } of arrOfObjects) {
//   console.log(a, b);
// }



//6
// const arr = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = arr;
// console.log(first, second);
// console.log(rest); // [3, 4, 5]


//7
// const arr = [1, 2, 3, 4, 5];
// const [first, , , , last] = arr;
// console.log(first, last); 


//8
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// const adults = users.filter(({ age }) => age >= 30);
// console.log(adults); // [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]


//9
// const mixedArray = [1, { a: 1, b: 2 }, 3];
// const [num, { a, b }, anotherNum] = mixedArray;
// console.log(num, a, b, anotherNum); // 1 1 2 3


//10
// function manualDestructing(obj) {
//   const keys = Object.keys(obj);
//   const values = [];
//   for (const key of keys) {
//     values.push(obj[key]);
//   }
//   return values;
// }

// const exampleObj = { a: 1, b: 2, c: 3 };
// const result = manualDestructing(exampleObj);
// console.log(result); // [1, 2, 3]