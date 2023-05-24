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

// Dynamic HTML template for new tasks
const template = (task) =>
  `<tr>
    <tb class="${task.backgroundColor}">
      <div class="all-task">
        <div class="all-days">
          <div class="entry">
            <p>記入</p>
            <p>${task.entryDay}</p>
          </div>
          <div class="end">
            <p>期日</p>
            <p>${task.outDay}</p>
          </div>
        </div>
        <p>${task.title}</p>
        <p>${task.content}</p>
      </div>
      <button class="delete-btn" type="button">
      <img src="../画像/ごみ箱アイコン.png"/>
      </button>
    </tb>
  </tr>`;

// Render the template to the DOM
const render = (htmlString, el) => {
  el.innerHTML += htmlString;
};

// Submit form
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

// let table = document.getElementById("fukaiShisuu");
// for (let row of table.rows) {
//   for (let cell of row.cells) {
//     if (cell.tagName == "TD") {
//       // TD 大文字でないと駄目
//       if (Number(cell.innerText) >= 85) {
//         cell.classList.add("d85");
//       } else if (Number(cell.innerText) >= 80) {
//         cell.classList.add("d80");
//       } else if (Number(cell.innerText) >= 75) {
//         cell.classList.add("d75");
//       } else if (Number(cell.innerText) >= 70) {
//         cell.classList.add("d70");
//       }
//     }
//   }
// }
