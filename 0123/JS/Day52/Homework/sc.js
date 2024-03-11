function Forma() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const dob = document.getElementById('dob').value;

    if (!email || !name || !surname || !dob) {
        alert('Please fill in all required fields.');
        return false;
    }

}