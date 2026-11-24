import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Person } from './shared/interfaces/person';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';

import { Navbar } from './components/navbar/navbar';
import { Step7ListGroupMenu } from './components/step7-list-group-menu/step7-list-group-menu';

@Component({
  imports: [
    Step2PersonTable,
    Step3PersonTableInput,
    Step4ForDirective,
    Step5EventBind,
    RouterOutlet,
    Navbar,
    Step7ListGroupMenu
],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  //Step 1 One way Binding
  name = 'Markos';
  doNotShowRest: boolean = true;

  user = {
    firstname: "Bob",
    lastname: "Dylan",
    email: "bob.dylan@aueb.gr"
  }

  person1: Person = {
    firstname: "George",
    lastname: "Harrison",
    email: "george.harrison@aueb.gr"
  }

  person2: Person = {
    firstname: "Lakis",
    lastname: "Lalakis",
    email: "lakis.lalakis@aueb.gr"
  }
}
