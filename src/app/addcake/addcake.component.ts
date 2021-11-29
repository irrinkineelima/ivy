import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {

  fileName = null
  name:any
  price:any
  description:any
  weight:any
  caketype:any
  flavour:any
  eggless:any


  constructor() { }

  onFileChange(evt:any): void {
    this.fileName = evt.target.files[0].name;
  }

  addcake(){
    var addcake = {
      filename : this.fileName,
      name : this.name,
      price : this.price,
      description : this.description,
      weight : this.weight,
      caketype :this.caketype,
      flavour : this.flavour,
      eggless : this.eggless
    }
    console.log(addcake)
  }

  ngOnInit(): void {
  }

}
