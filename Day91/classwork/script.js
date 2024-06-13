// let person = {
//     name: 'Jack',
//     age: 18,
//     gender: 'male',
//     printInfo(){
//         console.log(this.name,this.age)
//     }
// };
// const personTwo = Object.assign({},person)


// const ManualAssign = (changeobj,copyobj) =>{
//     for(key of Object.keys(copyobj)){
//         changeobj[key] = copyobj[key]

//     }
//     return changeobj
// }

// for(const key in person){
//     console.log(key) // person[key]
// }

// const ManualAssign = (changeobj,copyobj) =>{
//     for(const key in copyobj){
//         changeobj[key] = copyobj[key]
//     }

//     return changeobj
// }


// let person = {
//     name: 'Jack',
//     age: 18,
//     gender: 'male',
//     printInfo(){
//         console.log(this.name,this.age)
//     }
// };

// const manualAssign = (changeObj, ...objArr) => {
//     objArr.forEach((copyObj) => {
//         for(const key in copyObj){
//             changeObj[key] = copyObj[key]
//         }
//     })
//     return changeObj
// }



// const personTwo = manualAssign({name: "Gio", money:0,},
// person,{money:500},{});

// console.log(personTwo)
