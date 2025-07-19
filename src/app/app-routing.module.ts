import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { GetPersonComponent } from './components/get-person/get-person.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: "", component: GetPersonComponent},
  {path: "add", component:AddPersonComponent},
  {path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
