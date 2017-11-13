import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register-app',
  styles: [`
  #cover {
    background: url('https://i.imgur.com/1CNbOMG.jpg') center center no-repeat;
    background-size: cover;
    height: 89%;
    text-align: center;
    display: flex;
    align-items: center;
  }
  input.ng-touched.ng-invalid {border:solid red 1px;}
  input.ng-touched.ng-valid {border:solid green 1px;}
  #cover-caption {width: 100%;}`
  ],
  template: `<section id="cover">
              <div id="cover-caption">
                <div id="container" class="container">
                  <div class="row justify-content-center">
                    <div class="col-11 col-md-6 col-lg-5" style="background-color: white; border-radius: 25px;">
                      <div class="position-relative" style="margin-top: -60px;" >
                        <img  class="img-responsive" src="https://i.imgur.com/zl9teOq.png" style="background-color: white; padding: 10px; border-radius: 75px;">
                        <p class="h5">Customer Portal Register</p>
                      </div>
                      <form [formGroup]="registerForm" novalidate (ngSubmit)="submit()">
                        <div class="form-group">
                          <div class="row">
                            <div class="col-6">
                              <input class="form-control" type="email" name="email" formControlName="userEmail" placeholder="Email" />
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['userEmail'].invalid && registerForm.controls['userEmail'].touched">
                                Invalid email address
                              </div>
                            </div>
                            <div class="col-6">
                              <input class="form-control" type="email" name="confirmEmail" formControlName="confirmUserEmail" placeholder="Confirm Email" />
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['confirmUserEmail'].invalid && registerForm.controls['confirmUserEmail'].touched">
                                Invalid email address
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-6">
                              <input class="form-control" type="text" name="userName" formControlName="userName" placeholder="User name"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['userName'].invalid && registerForm.controls['userName'].touched">
                                User name is required
                              </div>
                            </div>
                            <div class="col-6">
                              <input class="form-control" type="text" name="firstName" formControlName="firstName" placeholder="First name"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['firstName'].invalid && registerForm.controls['firstName'].touched">
                                First Name is required
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-6">
                              <input class="form-control" type="text" name="companyName" formControlName="companyName" placeholder="Company name"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['companyName'].invalid && registerForm.controls['companyName'].touched">
                                Company name is required
                              </div>
                            </div>
                            <div class="col-6">
                              <input class="form-control" type="text" name="lastName" formControlName="lastName" placeholder="Last name"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['lastName'].invalid && registerForm.controls['lastName'].touched">
                                Last name is required
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-6">
                              <input class="form-control" type="text" name="city" formControlName="city" placeholder="City"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['city'].invalid && registerForm.controls['city'].touched">
                                City is required
                              </div>
                            </div>
                            <div class="col-6">
                              <input class="form-control" type="text" formControlName="phoneNumber" placeholder="Phone number"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['phoneNumber'].invalid && registerForm.controls['phoneNumber'].touched">
                                Invalid phone number
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-6">
                              <input class="form-control" type="password" formControlName="userPassword" placeholder="Password"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['userPassword'].invalid && registerForm.controls['userPassword'].touched">
                                User password requered or mon 6 simbol
                              </div>
                            </div>
                            <div class="col-6">
                              <input class="form-control" type="password" formControlName="userConfirmPassword" placeholder="Confirm password"/>
                              <div class="form-control-feedback" style="color:#d9534f;" *ngIf="registerForm.controls['userConfirmPassword'].invalid && registerForm.controls['userConfirmPassword'].touched">
                                User confirm password requered or mon 6 simbol
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button class="btn btn-warning form-control" [disabled]="registerForm.invalid">
                            Send
                          </button>
                        </div>
                      </form>
                        <a routerLink="/signin">Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>`
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(){
    this.registerForm = new FormGroup({
      "companyName":  new FormControl("", Validators.required),
      "userEmail":    new FormControl("", [
        Validators.required, 
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
      "confirmUserEmail": new FormControl("", Validators.required),
      "userName": new FormControl("", Validators.required ),
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "city": new FormControl("", Validators.required),
      "phoneNumber": new FormControl("", [
        Validators.required, 
        Validators.min(6) 
      ]),
      "userPassword": new FormControl("", [
        Validators.required, 
        Validators.min(6) 
      ]),
      "userConfirmPassword": new FormControl("", [
        Validators.required, 
        Validators.min(6) 
      ]),
    });
  }

  submit(){
    console.log(this.registerForm);
  }
}