import { Component } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-get-person',
  standalone: false,
  templateUrl: './get-person.component.html',
  styleUrl: './get-person.component.css'
})
export class GetPersonComponent {

  persons: any = [];
  //used with get by id and for update
  selectedPerson: any = null;
  //update
  isEditMode: boolean =false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getAllPerson();
  }

  getAllPerson() {
    this.personService.getAllPerson().subscribe((response) => {
      console.log(response);
      this.persons = response;
    })
  }

  getPersonById(id: string) {
    this.personService.getPersonById(id).subscribe((response) => {
      console.log("Fetched Person: ", response);
      this.selectedPerson = response;
    });
  }

  //to get id and update
  editPersonById(id: string) {
    this.personService.getPersonById(id).subscribe((response) => {
      console.log("Fetched Person: ", response);
      this.selectedPerson = {... response}; //avoid two way binding issue
      //to update the person by person id
      this.isEditMode = true;
    });
  }

  //update person code
  updatePerson(){
    if(this.selectedPerson && this.selectedPerson.personId){
      this.personService.updatePersonById(this.selectedPerson.personId, this.selectedPerson)
      .subscribe((response)=>{
        alert('person updated successfully!');
        this.selectedPerson = null;
        this.isEditMode= false;
        this.getAllPerson(); //refresh list
      }, error =>{
        console.log("fail to update person", error);
        alert("failed to update person");
      });
    }
  }

  closeModal() {
    this.selectedPerson = null;
    this.isEditMode = false;
  }



  deletePerson(id: string) {
    this.personService.deletePerson(id).subscribe((response) => {
      console.log(response);
      alert("Person Data deleted !" + id);
      this.getAllPerson();
    })
  }
}
