import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = 'Sahyar';
  items = [
    { description: "Breakfast" , action: "No"},
    { description: "Lunch" , action: "No"},
    { description: "Dinner" , action: "No"},
    { description: "Coffee" , action: "No"}
  ];
}
