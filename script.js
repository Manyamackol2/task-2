const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");

let total = 0;
let completed = 0;

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
    updateCompletedCount();
  });

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
    updateCounts();
  });

  taskInput.value = "";
  updateCounts();
});

function updateCounts() {
  total = taskList.querySelectorAll("li").length;
  completed = taskList.querySelectorAll("li.completed").length;

  totalCount.textContent = `${total} ${total === 1 ? "task" : "tasks"}`;
  completedCount.textContent = `${completed} completed`;

  emptyMsg.style.display = total === 0 ? "block" : "none";
}

function updateCompletedCount() {
  completed = taskList.querySelectorAll("li.completed").length;
  completedCount.textContent = `${completed} completed`;
}
