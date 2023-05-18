const form = document.querySelector(".form");
const taskInput = document.querySelector(".input");
const todoList = document.querySelector(".todo-list");

let state = {
  tasks: [],
};

// Dynamic HTML template for new tasks
const template = (task) =>
  ` 
  <table>
    <tr>
      <th>
        <p>${task}</p>
        <p><p>
        <p><p>
      </th>
    </tr>
  </table>`;

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
