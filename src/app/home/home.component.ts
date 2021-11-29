import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cakedata1={
    name:"mango cake",
    image:"assets/mangocake4.jpg",
    price:"600"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
