import { Component, OnInit } from '@angular/core';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
  personList: string[];

  constructor(private personsSvc: PersonsService) {
  }

  ngOnInit() {
    this.personList = this.personsSvc.persons;
  }

  onPersonClick(name: string) {
    this.personsSvc.removePerson(name);
    this.personList = this.personsSvc.persons;
  }
}
