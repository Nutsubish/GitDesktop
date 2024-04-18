document.getElementById("submitButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    const lastname = document.getElementById("lastnameInput").value;
    const age = document.getElementById("ageInput").value;
        
    const friend = {
      name: name,
      lastname: lastname,
      age: age
    };
       
    console.log(friend);
  });