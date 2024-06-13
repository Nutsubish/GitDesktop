class Person {
    #monkey;

    constructor(name, age, gender, monkey) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#monkey = monkey;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }

    get getName() {
        return this.name;
    }

    get isAdult() {
        return this.age >= 18;
    }

    set setName(newName) {
        this.name = newName;
    }

    get getmonkey() {
        return this.#monkey;
    }
}

const person1 = new Person("Nikolozi", 30, "Female", "YES");
person1.greet();

console.log(person1.name); 
console.log(person1.age);  
console.log(person1.gender); 



const person2 = new Person("Luka", 25, "Male", "NAH");
person2.age = 26; 
console.log(person2.age); 

const person3 = new Person("Vaso", 35, "Male", "YES");
const person4 = new Person("Baso", 28, "Female", "NAH");


console.log(person1.getName); 

console.log(person1.isAdult); 


person2.setName = "Gaso";
console.log(person2.name);


const person5 = new Person("Naso", 45, "Female", "YES");
console.log(person5.getmonkey);
