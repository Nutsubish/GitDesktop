// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res)=>{
//         console.log("hello",res)
//     })
//     .catch((err)=>{
//         console.log("error",err)
//     })
//     .finally(()=>{
//         console.log("finally")
//     })


// const add = () => {
//     let counter = 0;
//     return () =>{
//         counter += 1
//         console.log(counter);
//     }
// };

// const plusone = add();

// console.log(plusone)



// const something = document.getElementById("main-frame")
// const image = document.getElementById("image")
// fetch('https://rapidapi.com/collection/list-of-free-apis')
//     .then((result) =>{
//         return result.json
//     })
//     .then((res) =>{
//         console.log(res)
//         something.innerHTML = res.title
//         image.innerHTML = res.image
//     })