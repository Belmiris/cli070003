import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'max-ng-refresher';
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  onPersonCreated(name: string) {
    console.log('adding person ' + name);
    this.persons.push(name);
  }
}
