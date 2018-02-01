import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { ToDo, ToDoService } from './todo.service';

@Component({
  selector: 'to-do-list',
  template: `<div class="w3-container"><table class="w3-table-all">
              <thead>
                <tr class="w3-light-grey">
                  <th>Code</th>
                  <th>Detail</th>
                  <th>Action</th>
                </tr>
              </thead>
                <tr *ngFor="let todo of todos | async">
                  <td>{{todo.todoCode}}</td>
                  <td>{{todo.detail}}</td>
                  <td><a [routerLink]="[todo.id]">Edit</a></td>
                </tr>
            </table>
            <br />
            <router-outlet></router-outlet></div>
            `
})

export class ToDoListComponent implements OnInit {
  todos: Observable<ToDo[]>;
  //todos: ToDo[];

  constructor(private todoservice: ToDoService) {
    console.log('service runing');
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Test');
    this.todos = this.todoservice.getToDos();
  }

}
