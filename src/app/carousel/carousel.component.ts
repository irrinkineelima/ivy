import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel1="assets/cakeimage1.jpg"
  
  carousel3="assets/cakeimage3.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
