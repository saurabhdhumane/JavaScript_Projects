const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const toDoListKey = "myToDoList";

// Retrieve the existing to-do list from local storage, if any
const existingToDoList = JSON.parse(localStorage.getItem(toDoListKey)) || [];
existingToDoList.forEach((item) => {
  addToDoItem(item);
});

function addToDoItem(item) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
  `;

  listItem.addEventListener("click", function() {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function() {
    listItem.remove();
    const index = existingToDoList.indexOf(item);
    if (index > -1) {
      existingToDoList.splice(index, 1);
      localStorage.setItem(toDoListKey, JSON.stringify(existingToDoList));
    }
  });

  toDoBox.appendChild(listItem);
}

item.addEventListener("keyup", function(event) {
  if (event.key == "Enter") {
    const newItem = this.value;
    addToDoItem(newItem);

    existingToDoList.push(newItem);
    localStorage.setItem(toDoListKey, JSON.stringify(existingToDoList));

    this.value = "";
  }
});
