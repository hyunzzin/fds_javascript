import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  appUrl = environment.appUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.appUrl);
  }

  create(payload) {
    return this.http.post<Todo[]>(this.appUrl, payload);
  }

  remove(id) {
    return this.http.delete<Todo[]>(`${this.appUrl}/${id}`);
  }

  toggle(todo, payload) {
    return this.http.patch<Todo[]>(`${this.appUrl}/${todo.id}`, payload)
  }

  checkedAll(completed) {
    return this.http.patch<Todo[]>(`${this.appUrl}`, { completed })
  }

  clear() {
    return this.http.delete<Todo[]>(`${this.appUrl}/completed`)
  }
}
