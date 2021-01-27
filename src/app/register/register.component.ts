import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {
    
  };

  constructor() { } 

  ngOnInit(): void {
  }
 
  saveRegister(regForm: NgForm): void {
    console.log(regForm.value);
  }
}