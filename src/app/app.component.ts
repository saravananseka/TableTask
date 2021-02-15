import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headers = ["ID", "Name", "Age", "Gender", "Country"];
  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "3",
      "Name" : "Sachin",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "4",
      "Name" : "saravanan",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "5",
      "Name" : "mugesh",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "6",
      "Name" : "sarathkumar",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "7",
      "Name" : "hari",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "8",
      "Name" : "prasana",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
  ]
}
