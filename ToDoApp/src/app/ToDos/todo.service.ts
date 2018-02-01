import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class ToDo {
  constructor(public id: number,
                public todoCode: string,
                public detail: string,
                public priority: string,
                public date: Date,
                public status: string) {}
}

const TODOS = [
  new ToDo(101, "P101", "Angular 4 Pluralsight Training.","High",new Date('Dec 3, 2017'), 'Open'),
  new ToDo(102, "P201", "Web API Pluralsight Training.","Medium",new Date('Dec 1, 2017'), 'Closed'),
  new ToDo(103, "P102", "MVC Pluralsight Training.","High",new Date('Dec 2, 2017'), 'Open'),
  new ToDo(104, "P301", "Entity Framework Training.","Low",new Date('Dec 1, 2017'), 'Open'),
];

@Injectable()
export class ToDoService {

  getToDos(): Observable<ToDo[]> {
    return Observable.of(TODOS);
  }

  getToDoDetail(id: string | number): Observable<ToDo> {
    return this.getToDos()
      .map(todos => todos.find( todo => todo.id === +id));
  }
}
