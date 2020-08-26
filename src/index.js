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

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let list = document.createElement("ul");

  let html = "";
  for (let todoItem of todos) {
    html += `
      <li>
        completed: ${todoItem.completed} - description ${todoItem.description}
      </li>`;
  }
  list.innerHTML = html;
  h1.innerText = "Todo List";

  app.appendChild(h1);
  document.body.appendChild(list);
}

renderTodoApp();
