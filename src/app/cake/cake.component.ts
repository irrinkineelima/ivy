import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  cake:any={
    name:"Mango Cake",
    price:600,
    image:"assets/mangocake4.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
