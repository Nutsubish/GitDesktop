const outerDiv = document.getElementById('outerDiv');
const innerDiv = document.getElementById('innerDiv');

outerDiv.addEventListener('click', function() {
  console.log('(Bubbling)');
});

innerDiv.addEventListener('click', function() {
  console.log('(Bubbling)');
});


outerDiv.addEventListener('click', function() {
  console.log('(Capturing)', true);
}, true);

innerDiv.addEventListener('click', function() {
  console.log('Capturing)', true);
}, true);