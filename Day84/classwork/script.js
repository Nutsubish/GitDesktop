
const manualMap = function(arr, subFunc){
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(subFunc(arr[i]))
    }
    return result;
}


const people = [1,2,3,4,5];

const names = manualMap(people, function(obj){
    for(let j = 0; j < people.length; j++){
        if(people[j] % 2 ==0){
            return people[j]
        }
    }
})
console.log(names)





