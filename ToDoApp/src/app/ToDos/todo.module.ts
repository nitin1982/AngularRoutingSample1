import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoRoutingModule } from './todo-routing.module';
// import { ToDoCenterComponent } from './todo-center.component';
//import { ToDoHomeComponent } from './todo-home.component';
//import { ToDoListComponent } from './todo-list.component';
//import { ToDoDetailComponent } from './todo-detail.component';
import { ToDoService } from './todo.service';


@NgModule({
  declarations: [
    // ToDoCenterComponent,
    //ToDoHomeComponent,
    // ToDoListComponent,
    //ToDoDetailComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule
  ],
  providers: [ToDoService],
  exports: []
})
export class ToDoModule {

}
