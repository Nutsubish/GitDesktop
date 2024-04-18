// const person = {
//     is:{
//         hobby: ["proggramming","sports"],
//     },
//     greet(){
//         console.log("hi")
//     }
// };

// person


// const me = {
//     name : "nika",
//     greet : function(){
//         console.log("hello "+this.name)
//     }
// }

// me.greet()


// function Person(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
// }

// const me = new Person("nika", 13, "white");
// const you = new Person("mate", 13, "black");

// const names = ["luka", "mate", "gio", "saba", "nika"];
// const accounts = [];

// for (let i = 0; i < names.length; i++) {
//     accounts.push(new Person);
// }

function flight() {
    let flightnum = readLine();
    let flightstatus = readLine();

    let flight1 = new Fly(flightnum, flightstatus)

    console.log('Fly'+ flight1.flightnum + ' is ' + flight1.flightstatus)
}

function Fly(flightnum,status){
    this.number = flightnum;
    this.status = flightstatus;
}