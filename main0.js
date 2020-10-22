//selectors
const toDoInput = document.querySelector("#toDoInput");
const addTaskButton = document.querySelector("#addTask");
const undoButton = document.querySelector("#undo");
const toDoList = document.querySelector(".toDoList");


//Event listeners

addTaskButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);


//functions
function addToDo(event) {
  event.preventDefault();
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo");

  //li
  const newToDo = document.createElement('li');
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add('toDo-item');
  toDoDiv.appendChild(newToDo);

  saveLocalToDos(toDoInput.value);

  // check button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check">';
  completedButton.classList.add("check-btn");
  toDoDiv.appendChild(completedButton);


  // trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);
  //append
  toDoList.appendChild(toDoDiv);
  toDoInput.value = '';


}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const toDo = item.parentElement;
    toDo.remove();
  }
  if (item.classList[0] === "check-btn") {
    const toDo = item.parentElement;
    todo.classList.toggle('completed');
  }



}

function saveLocalToDos(toDo) {
  let todos;
  if (localStorage.getItem('toDos') === null) {
    toDos = [];

  } else {
    toDos = JSON.parse(localStorage.getItem('toDos'));
  }
  toDos.push(toDo);
  localStorage.setItem("toDoInputos", JSON.stringify(toDos))


}
