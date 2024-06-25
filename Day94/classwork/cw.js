// const pantsCount = 1000
// const myFirstPromise = new Promise((resolve, reject) => {
//     if(pantsCount > 0){
//         resolve("Yeee you can buy!")
//     }else{
//         reject("Reject Reason!")
//     }
// });

// console.log(myFirstPromise)


// console.log("Start");

// setTimeout(() => {
//     console.log("Opaaa")
// },1000);

// console.log("End")


const pantsCount = 100;

const executerFunction = (resolve, reject) => {
    if(pantsCount > 0){
        setTimeout(() => {resolve("Yee You cant")},1000)
    } else{
        setTimeout(()=> {reject("Pants is sold out"),1000})
    }
}

const orderPant = () => {
    return new Promise(executerFunction)
}

// orderPant().then((resolvedValue) => {
//     console.log(resolvedValue)
// },(rejectReason) => {
//     console.log(rejectReason)
// });


orderPant()
    .then((resolvedValue)=>{
        console.log(resolvedValue)
    })
    .catch((rejectReason)=>{
        
    })