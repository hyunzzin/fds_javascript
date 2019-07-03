import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/todo.interface';
import { TodoServiceService } from '../todo-service.service';
import { navItem } from '../types/navItem.interface';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  navState: navItem = 'All';
  navItem: navItem[] = ['All', 'Active', 'Completed'];
  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos)
  }

  addTodo(content) {
    const payload = { id: this.generateId(), content, completed: false }
    this.todoService.create(payload)
      .subscribe(todos => this.todos = todos);
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodo(id: number) {
    this.todoService.remove(id)
      .subscribe(todos => this.todos = todos)
  }

  toggleChecked(todo) {
    const payload = {
      content: todo.content,
      completed: !todo.completed
    }
    this.todoService.toggle(todo, payload)
      .subscribe(todos => this.todos = todos)
  }

  checkedAll(completed: boolean) {
    this.todoService.checkedAll(completed)
      .subscribe(todos => this.todos = todos);
  }

  clearCompleted() {
    this.todoService.clear()
      .subscribe(todos => this.todos = todos);
  }

  checkedNumber() {
    return this.todos.filter(todo => todo.completed).length;
  }
  leftNumber() {
    return this.todos.filter(todo => !todo.completed).length;
  }
  autoEvery() {
    return this.todos.every(todo => todo.completed);
  }
}
