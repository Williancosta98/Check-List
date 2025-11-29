const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listTaks = document.querySelector(".list-tasks");

let arrayTasks = [];

function addTasks() {
  arrayTasks.push({
    task: input.value,
    completed: false,
  });

  input.value = "";

  showTasks();
}

function showTasks() {
  let myLi = "";
  arrayTasks.forEach((item, index) => {
    myLi =
      myLi +
      `
     <li class="task ${item.completed && "done"}">
          <img src="./img/checked.png" alt="check-na-tarefa" onclick="taskCompleted(${index})">
          <p>${item.task}</p>
          <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deleteTask(${index})">
      </li>
    `;
  });

  listTaks.innerHTML = myLi;

  localStorage.setItem('list', JSON.stringify(arrayTasks))
}

function deleteTask(index) {
  arrayTasks.splice(index, 1);

  showTasks();
}

function taskCompleted(index) {
  arrayTasks[index].completed = !arrayTasks[index].completed;

  showTasks();
}

function reloadTasksPage() {
  const taskLocalStorage = localStorage.getItem('list')

  if(taskLocalStorage){
    arrayTasks = JSON.parse(taskLocalStorage)
  }

  showTasks()
}

reloadTasksPage();
button.addEventListener("click", addTasks);
