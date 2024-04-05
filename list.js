const inputBox = document.getElementById("input-box");
const itemsList = document.getElementById("list-items");
function addTask() {
    let trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
        alert('You Must Enter Something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = trimmedValue;
        itemsList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

itemsList.addEventListener("click",function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
}
},false);
function saveData() {
    localStorage.setItem("data",itemsList.innerHTML);
}
function showTask(){
    itemsList.innerHTML = localStorage.getItem("data");
}
showTask(); 