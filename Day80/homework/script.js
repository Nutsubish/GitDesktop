let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let img = document.getElementById("slider"); 
let txt = document.getElementById("txt")
const images = [
    "./images/apple.jpeg",
    "./images/banana.jpeg",
    "./images/grape.jpeg",
]
const text = [
    "hello this is apple",
    "hello this is banana",
    "hello this is grape"
]
let  count = 0;

nextBtn.addEventListener("click", function(){
    count += 1;

    if(count >= images.length){
        count = 0
    }
    img.src = images[count]

    if(count >= text.length){
        count = 0
    }
    txt.textContent = text[count] 

})

prevBtn.addEventListener("click",function(){
    count -= 1;

    if(count < 0){
        count = images.length-1;
    }
    img.src = images[count]
    if(count < 0 ){
        count = text.length-1;
    }
    txt.textContent = text[count]

})