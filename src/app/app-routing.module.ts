import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { GetPersonComponent } from './components/get-person/get-person.component';

const routes: Routes = [
  {path: "add", component:AddPersonComponent},
  {path: "", component: GetPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
