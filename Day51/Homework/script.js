let balance = 0;

function deposit() {
    let amount = parseInt(document.getElementById("amountInput").value);
    balance += amount;
    updateBalance();
}

function withdraw() {
    let amount = parseInt(document.getElementById("amountInput").value);
    if (amount > balance) {
        alert("No Money Left You");
    } else {
        balance -= amount;
        updateBalance();
    }
}

function updateBalance() {
    document.getElementById("balance").innerText = balance;


    if (balance > 1000) {
        alert("U balance is more 1000  so keep in mind that u cant sending more might be dangerous more");
    }
}
