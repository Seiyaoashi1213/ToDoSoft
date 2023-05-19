const form = document.querySelector(".form");

const entryDay = document.querySelector(".entry");
const outDay = document.querySelector(".out");

const contentTitle = document.querySelector(".sub-title");
const contet = document.querySelector(textarea);
const allContent = [
  entryDay.value,
  outDay.value,
  contentTitle.value,
  contet.value,
];

const taskInput = document.querySelector(".task-input");
const todoList = document.querySelector(".todo-list");

let state = {
  tasks: [],
};

// Dynamic HTML template for new tasks
const template = (task) =>
  `<div>
    <p>${task.task}</p>
  </div>`;

// Render the template to the DOM
const render = (htmlString, el) => {
  el.innerHTML += htmlString;
};

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = {
    task: taskInput.value,
  };
  state.tasks = [...state.tasks, task];
  render(template(state.tasks[state.tasks.length - 1]), todoList);
  taskInput.value = "";
});
