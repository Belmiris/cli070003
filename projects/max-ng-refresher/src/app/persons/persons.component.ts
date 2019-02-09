import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  isFetching: boolean;
  personList: string[];
  private rx1: Subscription;

  constructor(private personsSvc: PersonsService) {
  }

  ngOnInit() {
    this.rx1 = this.personsSvc.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personsSvc.fetchPersons();
  }

  ngOnDestroy() {
    this.rx1.unsubscribe();
  }

  onPersonClick(name: string) {
    this.personsSvc.removePerson(name);
  }
}
