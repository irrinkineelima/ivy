import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  email:any

  password:any

  Login(){

    if(this.email=="sri@gmail.com" && this.password=="Vishnu123$"){

    alert("login succesfully")

  }

  else{

        alert("unsuccesfull login")

      }

  }

  constructor() { }

  ngOnInit(): void {



  }

}