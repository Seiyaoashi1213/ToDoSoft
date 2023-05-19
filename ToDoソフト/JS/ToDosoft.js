const form = document.querySelector(".form");
const entryDay = document.querySelector(".entry-day");
const out = document.querySelector(".out");
const color = document.querySelector(".color");
const contentTitle = document.querySelector(".sub-title");
const content = document.querySelector("textarea");
const input = [entryDay, out, contentTitle, content];
const todoList = document.querySelector(".todo-list");

let state = {
  tasks: [],
};

const template = (taskInput) =>
  `
  <tr>
    <th>
      <p>${taskInput}</p>
    </th>
  </tr>;
  `;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = {
    taskInput: input.value,
  };

  state.tasks = [...state.tasks, taskInput];
  render(template(state.tasks[state.tasks.length - 1]), todoList);
  form.value = "";
});
