const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $customCheckbox = document.querySelector('.custom-checkbox');
const $nav = document.querySelector('.nav');
const $clearbtn = document.querySelector('.btn');
const $completeTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');


// 리스트 추가하기
let todos = [{
    id: 1,
    content: 'HTML',
    completed: true
  },
  {
    id: 2,
    content: 'CSS',
    completed: true
  },
  {
    id: 3,
    content: 'Javascript',
    completed: false
  }
];

function clearcompleted() {
  $completeTodos.innerHTML = todos.filter(item => item.completed).length;
  $activeTodos.innerHTML = todos.filter(item => !item.completed).length;
}

function render() {
  let html = '';
  // eslint-disable-next-line no-return-assign
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
  });

  $todos.innerHTML = html;
  clearcompleted();
}
console.log(todos.filter(item => item.completed).length);


$todos.onclick = function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(item => +e.target.parentNode.id !== item.id);
  render();
};

$todos.onchange = function (e) {
  if (e.target.checked) {
    todos = todos.map(item => (+e.target.parentNode.id === item.id ? Object.assign({}, item, {
      completed: !item.completed
    }) : item));
    render();
  }
};

$customCheckbox.onclick = function (e) {
  todos = todos.map(item => Object.assign({}, item, {
    completed: !!e.target.checked
  }));
  render();
};

$clearbtn.onclick = function () {
  todos = todos.filter(item => item.completed === false);
  render();
};

render();


// all, active, completed
// $nav.onclick = function (e) {
//   [...$nav.children].forEach((item) => {
//     if (item.id !== e.target) item.classList.remove('active');
//     e.target.classList.add('active');
//   });
// };

// $navActive.onclick = function (e) {
//   let _todos = [...todos];
//   console.log(_todos);
//   _todos = _todos.filter(item => {
//     console.log(item.completed);
//     return item.completed ? item : '';
//   });
//   console.log(_todos);
// }


// 샘플 데이터 집어넣기
// 추가하는 기능 넣기
// 삭제하기
// map으로 순회해서 id로 구분, completed 바꾸기
// allcheck 누르면 다 같은 상태로 변하게 하기