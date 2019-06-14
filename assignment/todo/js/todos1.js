const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $customCheckbox = document.querySelector('.custom-checkbox');
const $nav = document.querySelector('.nav');

// 리스트 추가하기
let todos = [{ id: 1, content: 'HTML', completed: true },
{ id: 2, content: 'CSS', completed: true },
{ id: 3, content: 'Javascript', completed: false }
];

function render() {
  let html = '';
  todos.forEach(({
    id,
    content,
    completed
  }) => {
    html += `<li id="${id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    return html;
  });
  $todos.innerHTML = html;
}

function generateId() {
  return todo.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

$todos.onclick = function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => +e.target.parentNode.id !== todo.id);
  render();
};

$todos.onchange = function (e) {
  console.log(e.target.parentNode.id);
  if (e.target.checked) {
    todos = todos.map(todo => +e.target.parentNode.id === todo.id ? Object.assign({}, todo, {
      completed: !todo.completed
    }) : todo);
    render();
  }
}

$inputTodo.onkeyup = function (e) {
  const content = $inputTodo.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  $inputTodo.value = '';
  todos = [{
    id: 1000,
    content,
    completed: false
  }, ...todos];
  console.log(todos);
  render();
}



render();