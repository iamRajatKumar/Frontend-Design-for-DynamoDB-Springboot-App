import { Component } from '@angular/core';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-get-person',
  standalone: false,
  templateUrl: './get-person.component.html',
  styleUrl: './get-person.component.css'
})
export class GetPersonComponent {

  persons: any = [];
  selectedPerson: any = null;
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
    })
  }

  closeModal() {
    this.selectedPerson = null;
  }

  deletePerson(id: string) {
    this.personService.deletePerson(id).subscribe((response) => {
      console.log(response);
      alert("Person Data deleted !" + id);
      this.getAllPerson();
    })
  }
}
