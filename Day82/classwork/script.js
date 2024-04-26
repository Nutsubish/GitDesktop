//first

// function manual_filter(func, arr) {

//     let filteredArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         
//             filteredArr.push(func(arr[i]));
//         
//     }
    
//     return filteredArr;
// }

//second


const names = [5,6,3,4,11,4,]

const namesno = names.map(function(value){
    return value * 2
});

console.log(namesno)