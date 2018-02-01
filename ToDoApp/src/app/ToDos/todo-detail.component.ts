import { Component, OnInit } from '@angular/core';
import { ToDo, ToDoService } from './todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'to-do-detail',
  template: `<div class="w3-panel w3-white w3-margin">
                <p><strong>{{todo.priority}}</strong> ToDo {{todo.todoCode}}, {{todo.detail}}, {{todo.status}}
                <br />Date: {{todo.date | date: 'fullDate'}}</p>
            </div>`
})

export class ToDoDetailComponent implements OnInit {
  todo: ToDo;

  constructor(private service: ToDoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let todoId = params['id'];
        this.service.getToDoDetail(todoId).subscribe(data => this.todo = data);
      }
    );

    /* --  Wrong Approach -- */
    /* This will not update the detail after navigation.
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getToDoDetail(id).subscribe(data => this.todo = data);
    /* -- */
  }
}
