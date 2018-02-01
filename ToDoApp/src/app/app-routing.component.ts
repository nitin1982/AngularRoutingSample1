import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home.component';

const appRoutes: Routes = [
  {
    path: 'HomePage', component: HomeComponent
  },
  {
    path: '', redirectTo: '/HomePage', pathMatch: 'full'
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

