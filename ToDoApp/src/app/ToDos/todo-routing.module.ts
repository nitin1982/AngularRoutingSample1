import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToDoCenterComponent } from './todo-center.component';
import { ToDoListComponent } from './todo-list.component';
import { ToDoDetailComponent } from './todo-detail.component';
import { ToDoHomeComponent } from './todo-home.component';


const todoRoutes = [
  {
    path: 'todoCentre',
    component: ToDoCenterComponent,
    children: [
      {
        path: '',
        component: ToDoListComponent,
        children: [
          {
            path: ':id',
            component: ToDoDetailComponent
          },
          {
            path: '',
            component: ToDoHomeComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [
    ToDoCenterComponent,
    ToDoListComponent,
    ToDoDetailComponent,
    ToDoHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes)
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class ToDoRoutingModule {

}
