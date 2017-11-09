import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'login-app',
  styles: [`
    input.nh-touched.ng-invalid {border:solid red 2px;}
    input.nh-touched.ng-valid {border:solid green 2px;}
  `],
  template: `<div>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-sm-10 offset-sm-1 text-center">
                    <h1 class="display-3">Customer Portal Login</h1>
                    <div class="info-form">   
                      <form class="justify-content-center" [formGroup]="loginForm" novalidate (ngSubmit)="submit()">
                        <div class="form-group">
                          <input class="form-control" name="name" formControlName="companyName" placeholder="{{'Company Name'}}" />
                          <div class="alert alert-danger" *ngIf="loginForm.controls['companyName'].invalid && loginForm.controls['companyName'].touched">
                            Name is required field
                          </div>
                        </div>
                        <div class="form-group">
                          <input class="form-control" name="email" formControlName="userEmail" placeholder="{{'Email'}}"/>
                          <div class="alert alert-danger" *ngIf="loginForm.controls['userEmail'].invalid && loginForm.controls['userEmail'].touched">
                            Invalid email address                    
                          </div>
                        </div>
                        <div class="form-group">
                          <input class="form-control" type="password" name="password" formControlName="userPassword" placeholder="{{'Password'}}"/>
                          <div class="alert alert-danger" *ngIf="loginForm.controls['companyName'].invalid && loginForm.controls['companyName'].touched">
                            Password is required field
                          </div>
                        </div>
                        <div class="form-group">
                          <button class="btn btn-success" [disabled]="loginForm.invalid">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(){
    this.loginForm = new FormGroup({
      "companyName":  new FormControl("", Validators.required),
      "userEmail":    new FormControl("", [
        Validators.required, 
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
      "userPassword": new FormControl("", Validators.required)
    });
  }

  submit(){
    console.log(this.loginForm);
  }
}