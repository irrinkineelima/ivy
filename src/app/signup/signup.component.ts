import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:any

  name:any

  password:any

  signup(){

    var user={

      email:this.email,

      name:this.name,

      password:this.password

    }

    console.log("user details are",user)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
