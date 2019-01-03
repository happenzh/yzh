import { Component, OnInit } from '@angular/core';
import {LoginInfo} from '../login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: LoginInfo = {
    name:'happenzh',
    pwd:'123456'
  }

  constructor() { }

  ngOnInit() {
    
  }

}
