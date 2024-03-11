const person = {
    name: "Nikolozi",
    age: 13,
    city: "tbilisi"
};


console.log(person.name);


person.age = "soon 14";


person.dream = "Be Full stack Developer";  //country igive Dream ubralod saxeli shevucvale orives Cvlaids da Value 


person.greet = function() {    
    console.log("Hello My name is: " + person.name ); 
};


let person2 = {
    name: "Mate",
    age: 13,
    city: "tbilisi",
    dream: "Maybe also Fullstack",
    greet: function() {
        console.log("Hello, my name is " + person2.name );
    }
};

console.log(person === person2); 


