let count = 0;
let counterElement = document.getElementById('counter');
let clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', function () {
    count++;
    counterElement.textContent = count;
});