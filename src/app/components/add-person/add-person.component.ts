import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../service/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  standalone: false,
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css',
})
export class AddPersonComponent {

  postPersonForm!: FormGroup;

  constructor(
    private personService: PersonService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  //single Address as in String 
  // ngOnInit() {
  //   this.postPersonForm = this.fb.group({
  //     name: [null, Validators.required],
  //     email: [null, [Validators.required, Validators.email]],
  //     address: [null, Validators.required],
  //   });
  // }
  
  //address as in Object type key value pair
    ngOnInit() {
    this.postPersonForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        pincode: ['']
      })
    });
  }

  postPerson() {
    console.log(this.postPersonForm.value);
    this.personService
      .postPerson(this.postPersonForm.value)
      .subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('');
      });
  }
}
