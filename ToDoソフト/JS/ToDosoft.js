const form = document.querySelector(".form");

const entryDay = document.querySelector(".entry-day");

const outDay = document.querySelector(".out-day");

const contentTitle = document.querySelector(".sub-title");
const content = document.querySelector('textarea[name="content"]');

const backgroundColor = document.querySelector(".color");

const todoList = document.querySelector(".todo-list");

let state = {
  tasks: [],
};

// 記入したタスクの出力
const template = (task) =>
  `<div class="all-task ${task.backgroundColor}">
    <div class="all-days">
      <div class="entry">
        <h6>記入</h6>
        <p class="enters">${task.entryDay}</p>
      </div>
      <div class="end">
        <h6>期日</h6>
        <p class="outs">${task.outDay}</p>
      </div>
    </div>
    <div class="task-content">
      <p>${task.title}</p>
      <p>${task.content}</p>
    </div>
    <button class="delete-btn" type="button" onclick="removeExample(this)">
      <img src="../画像/ごみ箱アイコン.png"/>
    </button>
  </div>`;

// Render the template to the DOM
const render = (htmlString, el) => {
  el.innerHTML += htmlString;
};

// 保存ボタンを押した後出力する
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = {
    entryDay: entryDay.value,
    outDay: outDay.value,
    title: contentTitle.value,
    content: content.value,
    backgroundColor: backgroundColor.value,
  };

  state.tasks = [...state.tasks, task];
  render(template(state.tasks[state.tasks.length - 1]), todoList);
  contentTitle.value = "";
  outDay.value = "";
  content.value = "";
});

//記入欄の背景色選択欄の選択後の色の設定
const colorSelect = document.getElementById("color-select");
console.log(colorSelect);
colorSelect.addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  const selectedClass = selectedOption.className;
  this.className = selectedClass;
});

//今日の日時を表示
window.onload = function () {
  //今日の日時を表示
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var toTwoDigits = function (num, digit) {
    num += "";
    if (num.length < digit) {
      num = "0" + num;
    }
    return num;
  };

  var yyyy = toTwoDigits(year, 4);
  var mm = toTwoDigits(month, 2);
  var dd = toTwoDigits(day, 2);
  var ymd = yyyy + "-" + mm + "-" + dd;

  document.getElementById("entry-day").value = ymd;
};

// input要素を取得
var getOutDay = document.getElementById("out-day");

// 日付の変更イベントを監視
getOutDay.addEventListener("input", function () {
  // 選択された日付を取得
  var selectedDate = new Date(this.value);

  // 別のカレンダーで選択された日付を取得（例としてidが"otherDateInput"のinput要素とする）
  var limitEntryDay = document.getElementById("entry-day");
  var limit = new Date(limitEntryDay.value);

  // 別のカレンダーで選択された日付よりも前の日を選択できないようにする
  if (selectedDate < limit) {
    this.value = limitEntryDay.value;
  }
});

//削除ボタンの機能
function removeExample(button) {
  if (window.confirm("本当に削除しますか？")) {
    let parent = button.parentNode;
    parent.remove();
  }
}

const entryDayBtn = document.querySelector(".entry-day-btn");
const endDayBtn = document.querySelector("end-day-btn");
const sortColor = document.querySelector(".sort-color");

let tmp = { subTodoList: [] };

// const newTemplate = (sortedTask) =>
//   `<div class="all-task ${sortedTask.backgroundColor}">
//     <div class="all-days">
//       <div class="entry">
//         <h6>記入</h6>
//         <p class="enters">${sortedTask.entryDay}</p>
//       </div>
//       <div class="end">
//         <h6>期日</h6>
//         <p class="outs">${sortedTask.outDay}</p>
//       </div>
//     </div>
//     <div class="task-content">
//       <p>${sortedTask.title}</p>
//       <p>${sortedTask.content}</p>
//     </div>
//     <button class="delete-btn" type="button" onclick="removeExample(this)">
//       <img src="../画像/ごみ箱アイコン.png"/>
//     </button>
//   </div>`;

entryDayBtn.addEventListener("click", (e) => {
  e.preventDefault();

  for (let i = 0; i < state.tasks.length; i++) {
    tmp.subTodoList = [...tmp.subTodoList, state.tasks[i]];
  }

  tmp.subTodoList.sort(function (a, b) {
    if (a.entryDay > b.entryDay) {
      return 1;
    } else {
      return -1;
    }
  });

  // 一度中身を消す
  todoList.innerHTML = "";

  // 再出力

  tmp.subTodoList.map((task) => {
    render(template(task), todoList);
  });

  // for (let i = 0; i < tmp.subTodoList.length; i++) {
  //   const sortedTask = {
  //     entryDay: tmp.subTodoList[i].entryDay.value,
  //     outDay: tmp.subTodoList[i].outDay.value,
  //     title: tmp.subTodoList[i].title.value,
  //     content: tmp.subTodoList[i].content.value,
  //     backgroundColor: tmp.subTodoList[i].backgroundColor.value,
  //   };

  //   state.tasks = [...state.tasks, sortedTask];
  //   render(newTemplate(state.tasks[state.tasks.length - 1]), todoList);
  // }

  // render(tmp.subTodoList, todoList);
});
