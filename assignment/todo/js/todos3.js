const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $customCheckbox = document.querySelector('.custom-checkbox');
const $nav = document.querySelector('.nav');
const $clearbtn = document.querySelector('.btn');
const $completeTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

// 리스트 추가하기
let todos = [];
let navId = 'all';

// completed clear
function clearcompleted() {
  $completeTodos.innerHTML = todos.filter(item => item.completed).length;
  $activeTodos.innerHTML = todos.filter(item => !item.completed).length;
}

function render(todosFromServer) {
  todos = todosFromServer;

  const _todos = todos.filter(item => {
    if (navId === 'active') return !item.completed;
    if (navId === 'completed') return item.completed;
    return true;
  });

  let html = '';
  // eslint-disable-next-line no-return-assign
  _todos.forEach(({
    id,
    content,
    completed
  }) => {
    html += `<li id="${id}" class="todo-item">
  <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
  <label for="ck-${id}">${content}</label>
  <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  clearcompleted();
}

// id 만들기
function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function getTodos() {
  // 서버로부터 todos를 fetch
  fetch('http://localhost:4500/todos')
    .then(res => res.json())
    .then(render)
    .catch(console.error);
}

function addTodo(content) {
  fetch('http://localhost:4500/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: generateId(), content, completed: false })
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
}

function patchOneTodo(id, status) {
  fetch(`http://localhost:4500/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(status)
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
}

function patchAllTodo(status) {
  fetch('http://localhost:4500/todos/', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(status)
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
}

function removeTodo(status) {
  fetch(`http://localhost:4500/todos/${status}`, {
    method: 'DELETE'
  }).then(res => res.json())
    .then(render)
    .catch(console.log);
}

window.onload = () => { getTodos(); };

// todo 삭제
$todos.onclick = function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  removeTodo(+e.target.parentNode.id);
};

// checked 시 checked
$todos.onchange = function (e) {
  patchOneTodo(+e.target.parentNode.id, { completed: e.target.checked });
};

// all checked
$customCheckbox.onchange = function (e) {
  patchAllTodo({
    completed: e.target.checked
  });
};

// clearbtn click checked delete
$clearbtn.onclick = function () {
  removeTodo('completed');
};

// enter 입력 시 todo 추가
$inputTodo.onkeyup = function (e) {
  const content = $inputTodo.value.trim();
  if (!content || e.keyCode !== 13) return;
  addTodo(content);
  $inputTodo.value = '';
};


// all, active, completed
$nav.onclick = function (e) {
  [...$nav.children].forEach(item => {
    if (item.id !== e.target) item.classList.remove('active');
    e.target.classList.add('active');
  });
  navId = e.target.id;
  render(todos);
};

render(todos);
