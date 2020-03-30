const body = document.querySelector("body");
const themeIcon = document.getElementById("themeIcon");
const input = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");
const buttonAdd = document.getElementById("button-add");

body.classList.add("light-theme");

themeIcon.addEventListener("click", e => {
  e.preventDefault();
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
});

class TodoItem{
  constructor(itemName){
    this.createListItem(itemName);
  }

  createListItem(itemName){
    let item = document.createElement("div")
    item.classList.add("item")

    let itemInput = document.createElement("input");
    itemInput.value = itemName;
    itemInput.disabled = true;  
    itemInput.classList.add("item_input");
    itemInput.type = "text";

    let editButton = document.createElement("Button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("Button");
    removeButton.innerHTML = "Remove"
    removeButton.classList.add("removeButton");


    editButton.addEventListener('click', () => this.editTodo(itemInput));
    removeButton.addEventListener('click', () => this.removeTodo(item));
    item.appendChild(itemInput);
    item.appendChild(editButton);
    item.appendChild(removeButton);

    listContainer.appendChild(item);

    }
    editTodo(input){
      input.disabled = !input.disabled;
    }
    removeTodo(item){
      listContainer.removeChild(item);
    }
}

buttonAdd.addEventListener('click', function(){
    if(input.value != ""){
      new TodoItem(input.value);
      input.value = ""
    }
});
window.addEventListener('keydown', e => {
  if(e.which == 13){
    if(input.value != ""){
      new TodoItem(input.value);
      input.value = ""
    }
  }
});