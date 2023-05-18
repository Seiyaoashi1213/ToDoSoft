const todoHeader = document.querySelector("h1");

todoHeader.innerHTML = "好きな文字列";

const form = document.querySelector(".form");
form.addEventListener("submit", () => alert("hello"));
