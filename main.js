const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const todoColumn = document.getElementById("todo");
const inProgressColumn = document.getElementById("inprogress");
const doneColumn = document.getElementById("done");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskCard = createTaskCard(taskText);
  todoColumn.appendChild(taskCard);

  taskInput.value = "";
});

function createTaskCard(text) {
  const card = document.createElement("div");
  card.classList.add("task");

  const title = document.createElement("p");
  title.textContent = text;

  const moveToProgress = document.createElement("button");
  moveToProgress.textContent = "Move to In Progress";
  moveToProgress.onclick = () => {
    inProgressColumn.appendChild(card);
  };

  const moveToDone = document.createElement("button");
  moveToDone.textContent = "Move to Done";
  moveToDone.onclick = () => {
    doneColumn.appendChild(card);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => {
    card.remove();
  };

  card.appendChild(title);
  card.appendChild(moveToProgress);
  card.appendChild(moveToDone);
  card.appendChild(deleteBtn);

  return card;
}