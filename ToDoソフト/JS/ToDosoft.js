const form = document.querySelector(".form");
const taskInput = document.querySelector(".");
const todoList = document.querySelector(".todo-list");

let state = {
  tasks: [],
};

// Dynamic HTML template for new tasks
const template = (task) =>
  `<th>
    <p>${task.task}</p>
  </th>`;

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
