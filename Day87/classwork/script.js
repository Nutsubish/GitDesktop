// codewars
//8kyu

//1
function invert(array) {
    return array.map(function(number) { //use map method for to going through all the array things like 
      return -number;                   //for looping through and adding each number - to it //
    });
  }

//2

function fakeBin(x) {
    let result = '';  //created a variable to store thing that we get from x arg final
    for (let i = 0; i < x.length ; i++) {
  
      let char = x[i]; // for see all letters in the word for example in car if we wrote console log it will output c a r
      
      if (char < '5') {   // in js there is a trick where you dont need to transform str 5 into int 5 it auto does it
        result += '0';
      } else {
        result += '1';
      }
    }
    return result;
  }
//3 

function areaOrPerimeter(l, w) {
    if (l === w) {  // for square
      return l * w;  
    } else {
      return 2 * (l + w);  
    }
  }

//4
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twiceSonAge = sonYearsOld * 2;
    let substractions = dadYearsOld - twiceSonAge;
    
    if (substractions >= 0) { 
      return substractions;
    } else {
      return -substractions;   // - + - = +  
    }
  }

//5
function oddCount(n){
    let count = 0;
    for (let i = 1; i < n; i += 2) {
        count++;
    }
    return count;
}



//7kyu



//6kyu

function solution(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            result.push(str.slice(i, i + 2));
        } else {
            result.push(str.slice(i) + '_');
        }
    }
    return result;
}
