//1
let div = document.getElementById("First");
let p1 = document.getElementById("p1");
let btn1 = document.getElementById("btn1");
let counter = 0;

btn1.addEventListener("click", function() {
    counter++;
    div.style.backgroundColor = getRandomColor();
    p1.style.color = getRandomColor();
    p1.textContent = "Counter: " + counter;
});

function getRandomColor() {//aq kargad ver mivxdi rogor unda damegeneratebina random color w3sources-shi vnaxe da cota gadavaketa magram mainc imushava
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}                                       // 256 * 256 * 256 


//2
let image = document.getElementById("image");
let changeing = document.getElementById("btntwo");

changeing.addEventListener("click", function() {

    if (image.src.includes("minecraft.jpeg")) {
        image.src = "roblox.jpeg";
    } else {
        image.src = "minecraft.jpg";
    }
});


//3
let paragraphs = document.getElementsByClassName("p");
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
    [...paragraphs].forEach(function(paragraph) { // gadamyavs html colleqcia massivshi 
        paragraph.textContent = Math.floor(Math.random() * 10) + 1;
    });
});


//4
let myLink = document.getElementById("myLink");
        let Div4 = document.getElementById("Fourth");
        let changeButton = document.getElementById("btn4");

        changeButton.addEventListener("click", function() {
            myLink.href = "https://www.discord.com";
            Div4.style.backgroundColor = "green";
        });


//5 

let easy = document.getElementsByClassName("five");
let button = document.getElementById("btn5");

button.addEventListener("click", function() {
    for (let i = 0; i < easy.length; i++) {
        easy[i].style.backgroundColor = "yellow"; 
    }
});



