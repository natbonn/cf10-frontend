import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-step2-person-table',
  styleUrl: './step2-person-table.css',
  templateUrl: './step2-person-table.html',
})
export class Step2PersonTable {
  user = {
    firstname: "John",
    lastname: "Lennon",
    email: "john.lennon@aueb.gr"
  }
}
