import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName: string;

  onCreatePerson() {
    console.log('create person ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
