//* To do List *//
let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];
let app = document.querySelector("#app");
let h1 = document.createElement("h1");
let list = document.createElement("ul");

app.appendChild(h1);
app.appendChild(list);

function renderTodoApp() {
  let html = "";
  for (let todoItem of todos) {
    let input = `<input type="checkbox"> ${todoItem.description} </input>`;
    if (todoItem.completed === true) {
      input = `<input type="checkbox" checked> ${todoItem.description} </input>`;
    }
    html += `
      <li>
       ${input}
      </li>`;
  }
  list.innerHTML = html;
  h1.innerText = "Todo List";
}
let form = document.querySelector("#form");
let userInput = document.querySelector("#input");
form.onsubmit = (e) => {
  e.preventDefault();
  let item = {
    completed: false,
    description: userInput.value,
  };
  todos.push(item);
  userInput.value = "";
  renderTodoApp();
};

renderTodoApp();
