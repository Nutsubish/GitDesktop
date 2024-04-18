// task 1
// const p = document.getElementById("p")
// const child = document.getElementById("child")

// p.addEventListener("click",function(){
//     p.style.backgroundColor = "red"
//     child.style.backgroundColor = "blue";
// },true)

// child.addEventListener("click",function(){
//     p.style.backgroundColor = "red"
//     child.style.backgroundColor = "blue";
// })


// const pdiv = document.getElementById("p")
// const childdiv = document.getElementById("child")

let count = 0;
nextBtn.addEventListener("click", function () {
   count += 1;

if(count >= images.length) {
   count = 0;
}
   img.src = images [count];
})

pervBtn.addEventListener("click", function() {
count -= 1;
if (count <= 0) {

count =images.length -1;
}
img.src=images [count];})