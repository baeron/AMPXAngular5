import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'forgot-app',
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
                        <p class="h5">Customer Portal Forgot Password</p>
                      </div>
                      <form [formGroup]="forgotPassForm" novalidate (ngSubmit)="submit()">
                        <div class="form-group">
                          <input class="form-control" type="text" name="companyName" formControlName="companyName" placeholder="Company name"/>
                          <div class="form-control-feedback" style="color:#d9534f;" *ngIf="forgotPassForm.controls['companyName'].invalid && forgotPassForm.controls['companyName'].touched">
                            Company name is required
                          </div>
                        </div>
                        <div class="form-group">
                          <input class="form-control" type="email" name="email" formControlName="userEmail" placeholder="Email" />
                          <div class="form-control-feedback" style="color:#d9534f;" *ngIf="forgotPassForm.controls['userEmail'].invalid && forgotPassForm.controls['userEmail'].touched">
                            Invalid email address
                          </div>
                        </div>
                        <div>
                          <button class="btn btn-warning form-control" [disabled]="forgotPassForm.invalid">
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
export class ForgotComponent {
  forgotPassForm: FormGroup;
  constructor(){
    this.forgotPassForm = new FormGroup({
      "companyName":  new FormControl("", Validators.required),
      "userEmail":    new FormControl("", [
        Validators.required, 
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
    });
  }

  submit(){
    console.log(this.forgotPassForm);
  }
}