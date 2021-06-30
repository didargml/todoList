var button = document.getElementById("btn");
var input = document.getElementById("inputitem");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function inputLength(){
    return input.value.length;
}

function addItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    li.classList.toggle("done");
}
button.addEventListener("click", function(){
   //console.log("btn clicked!!!");
    if (inputLength() > 0){  
        addItem();
   
    }
})

input.addEventListener("keypress", function(event){
    
    if (inputLength() > 0 && event.keyCode === 13) {  
        addItem();
    }
 })

 items.addEventListener("click", function(){
    
 })