const form = document.getElementById("myForm")

const accaunt = {};

form.addEventListener("submit",function(forms){
    forms.preventDefault();
    
     const username = form.elements.username.value;
     const password = form.elements.password.value;

     if(username.length >= 5 && password.length >= 8){
        accaunt.username = username;
        accaunt.password = password;
     } if (username.length < 5){
       alert("User Name needs more then 5 letters")
     }
     if (password.length < 8){
        alert("password needs more then 8 letters")
     }


    accaunt.username = form.elements.username.value
    accaunt.password = form.elements.password.value

    console.log(accaunt)
    
})