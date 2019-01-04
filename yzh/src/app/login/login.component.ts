import { Component, OnInit } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import {   
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    // 表单对应值
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

}
