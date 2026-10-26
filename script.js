// Part 1: JavaScript Basics
console.log("Name: Yerassyl Irangait");
console.log("Group: SE-2523");
alert("Hello, JavaScript World!");

let firstName = "Yerassyl";
let lastName = "Irangait";
let numberOne = 12;
let numberTwo = 4;
let isStudent = true;

console.log("String:", firstName);
console.log("Number:", numberOne);
console.log("Boolean:", isStudent);
console.log("Addition:", numberOne + numberTwo);
console.log("Subtraction:", numberOne - numberTwo);
console.log("Multiplication:", numberOne * numberTwo);
console.log("Division:", numberOne / numberTwo);
console.log("Concatenation:", firstName + " " + lastName);

// Part 2: DOM Manipulation
document.getElementById("changeTextButton").addEventListener("click", function () {
    document.getElementById("changeText").textContent = "The text was changed using JavaScript!";
});

document.getElementById("changeColorButton").addEventListener("click", function () {
    document.getElementById("styleBox").style.backgroundColor = "lightblue";
});

document.getElementById("changeFontButton").addEventListener("click", function () {
    document.getElementById("styleBox").style.fontSize = "24px";
});

const itemList = document.getElementById("itemList");

document.getElementById("addItemButton").addEventListener("click", function () {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(item);
});

document.getElementById("removeItemButton").addEventListener("click", function () {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});

// Part 3: Events
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {
    mouseBox.style.backgroundColor = "lightblue";
});

mouseBox.addEventListener("mouseout", function () {
    mouseBox.style.backgroundColor = "#dee2e6";
});

const keyboardInput = document.getElementById("keyboardInput");

keyboardInput.addEventListener("keyup", function () {
    document.getElementById("keyboardOutput").textContent = keyboardInput.value;
});

document.getElementById("validationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("validationName").value.trim();
    const email = document.getElementById("validationEmail").value.trim();
    const password = document.getElementById("validationPassword").value.trim();
    const message = document.getElementById("validationMessage");

    if (name === "" || email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.className = "mt-3 mb-0 text-danger";
    } else {
        message.textContent = "All fields are filled in. No data was sent.";
        message.className = "mt-3 mb-0 text-success";
    }
});

// Part 4: To-Do List
const tasks = [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const item = document.createElement("li");
        item.className = "list-group-item d-flex align-items-center gap-3";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input mt-0";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });

        const text = document.createElement("span");
        text.textContent = task.text;
        text.className = "flex-grow-1";
        if (task.completed) {
            text.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "btn btn-outline-danger btn-sm";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(deleteButton);
        todoList.appendChild(item);
    });
}

document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const text = todoInput.value.trim();
    if (text === "") {
        return;
    }

    tasks.push({ text: text, completed: false });
    todoInput.value = "";
    renderTasks();
});
