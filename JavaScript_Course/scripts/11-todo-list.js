const todoList = [];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject; // shorter way to type the code above
    const html = `
      <p>
        ${name} ${dueDate}
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList(); 
        ">Delete</button>
      </p>
      `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-display').innerHTML = todoListHTML;
  
}


function addToDo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const inputDateElement = document.querySelector('.js-date-input');
  const dueDate = inputDateElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name, // shorter way to type the code above
    dueDate
  });// this adds whatever the value is typed in, into the todoList empty array
  console.log(todoList);


  inputElement.value = '';
  inputDateElement.value = '';

  renderTodoList();
}