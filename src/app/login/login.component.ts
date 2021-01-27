import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    // username: '',
    // password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveLogin(logForm: NgForm): void {
    console.log(logForm.value);
  }

}
