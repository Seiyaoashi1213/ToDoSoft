const todoHeader = document.querySelector("h1");

todoHeader.innerHTML = "好きな文字列";

const form = document.querySelector(".form");
form.addEventListener("submit", () => alert("hello"));

const form = document.querySelector(".form");
const taskInput = document.querySelector(".sub-title");
const todoList = document.querySelector(".todo-list");

let state = {
  tasks: [],
};

// Dynamic HTML template for new tasks
const template = (task) =>
  ` 
    <tr>
        <th>
            <p>${task}</p>
            <p><p>
            <p><p>
        </th>
    </tr>;
    `;

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
