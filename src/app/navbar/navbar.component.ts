  import { Component, OnInit } from '@angular/core';



  var name = "Neelu"

  @Component({

    selector: 'app-navbar',

    templateUrl: './navbar.component.html',

    styleUrls: ['./navbar.component.css']

  })

  export class NavbarComponent implements OnInit {

    title:string = "Neelu's Cake Gallery"

    name:string = name

    constructor() { }

    search() {

      alert("Search clicked")

    }

    searchbutton:string="button"

    ngOnInit(): void {

    }



  }