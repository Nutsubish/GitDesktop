// class Account {
//     constructor(firstname, lastname, email) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//     }
// }

// const dataBase = [];
// const form = document.getElementById("userForm");

// form.addEventListener("submit", function(a){
   
//     a.preventDefault();
    
//     const firstname = document.getElementById('firstname').value;
//     const lastname = document.getElementById('lastname').value;
//     const email = document.getElementById('email').value;

//     const newAccount = new Account(firstname, lastname, email);
//     dataBase.push(newAccount);

    
    
// });




// class Account {
//     #password;
//     constructor(password, lastname) {
//         this.#password = password;
//         this.lastname = lastname;
//     }

//     set password(newpass){
//         this.#password = newpass;
//     }

//     get password(){
//         return this.#password
//     }

// }


// const person1 = new Account("luka123","tshkavaradze")

// person1.password = "Vale123"

















class Account {
    #password;

    constructor(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.#password = password; 
    }

    checkPassword(password) {
        return this.#password === password; 
    }
}

const dataBase = [];

const form = document.getElementById("userForm");
const loginForm = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newAccount = new Account(firstname, lastname, email, password);
    dataBase.push(newAccount);

    alert('Registration successful');
    form.reset();
});

loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const userAccount = dataBase.find(account => account.email === email);

    if (userAccount && userAccount.checkPassword(password)) {
        alert('Login successful');
    } else {
        alert('Invalid email or password');
    }

    loginForm.reset();
});
