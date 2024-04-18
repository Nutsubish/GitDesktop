// const numbers = [2, 5, 8, 11, 14, 16, 4, 24, 26, 28];


// for (let i = 0; i < numbers.length; i++) {
   
//     if (i % 2 == 0) {
//         console.log(numbers[i] + " is even");
//     } else {
//         console.log(numbers[i] + " is odd");
//     }
// }

// console.log(Math.sqrt(81))

let number_Of_Tickets_To_Buy = prompt("tickets");
let ticketsArray = [];

for (let i = 0; i < numberOfTicketsToBuy; i++) {
    let ticketCode = Math.floor(Math.random() * Math.max); 
    let name = prompt("name:");
    let surname = prompt("surname:");
    let age = prompt("age:");

    let ticket = {
        code: ticketCode,
        name: name,
        surname: surname,
        age: age
    };

    ticketsArray.push(ticket);
}

console.log(ticketsArray);