const manualFilter = function(arr, func){
    const newArr = []
    
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(arr[i])
        }
    }
    
    return newArr;
}

const students = [{name: "Luka", grade: 70}, {name: "Lile", grade: 55}, {name: "Nia", grade: 65}]

const whoPassed = manualFilter(students, function(studentObj){
    return studentObj.grade >= 60;
})