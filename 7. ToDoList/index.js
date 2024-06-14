const textInput = document.getElementById("text-input");
const addBtn = document.querySelector(".enter-button");
const ul = document.getElementById("task-list");


addItem = () => {
    if(textInput.value === ""){
        alert("Task cannot be empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textInput.value;
        ul.appendChild(li); 
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    textInput.value = "";

    saveList();
}


addBtn.addEventListener('click', addItem);

textInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addItem();
    }
});

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveList();
    }

    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveList();
    }
    
});

saveList = () => {
    localStorage.setItem("tasks", ul.innerHTML);
}

showList = () => {
    ul.innerHTML = localStorage.getItem("tasks");
}

showList();
