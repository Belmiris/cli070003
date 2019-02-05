import { Component, OnInit } from '@angular/core';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent implements OnInit {
  enteredPersonName: string;

  constructor(private personsSvc: PersonsService) {
  }

  ngOnInit() {

  }

  onCreatePerson() {
    console.log('create person ' + this.enteredPersonName);
    this.personsSvc.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
