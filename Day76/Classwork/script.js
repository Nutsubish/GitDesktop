

const parentDiv = document.getElementById("divs");
const form = document.getElementById("myForm");

const todo = [];

const addChild = function(text){
    const pNode = document.createElement("p");
    const textNode = document.createTextNode(text);

pNode.appendChild(textNode);
    parentDiv.appendChild(pNode);

pNode.addEventListener("click", function() {
    parentDiv.removeChild(pNode);
})
}

Form.addEventListener("submit", function(e){
    e.preventDefault();

    const input = form.elements.name;
    addChild(input.value);

    input.value='';
});
