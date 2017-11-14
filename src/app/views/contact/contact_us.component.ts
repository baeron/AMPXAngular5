import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'contact-app',
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 1px;}
    input.ng-touched.ng-valid {border:solid green 1px;}
  `],
  template: `<div>
              <div>
                <img class="d-block img-fluid" src="https://i.imgur.com/K7EI8uX.jpg">
              </div>
              <div class="container">
                <form [formGroup]="contactUsForm" novalidate (ngSubmit)="submit()">
                  <div class="row justify-content-center mt-5">
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <input class="form-control" type="text" name="name" formControlName="userName" placeholder="Name" />
                            <div class="form-control-feedback" style="color:#d9534f;" *ngIf="contactUsForm.controls['userName'].invalid && contactUsForm.controls['userName'].touched">
                              User name is required
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <input class="form-control" type="email" name="email" formControlName="userEmail" placeholder="Email" />
                            <div class="form-control-feedback" style="color:#d9534f;" *ngIf="contactUsForm.controls['userEmail'].invalid && contactUsForm.controls['userEmail'].touched">
                              Invalid email address
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <input class="form-control" type="text" name="phone" formControlName="userPhone" placeholder="Phone number (optional)" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="form-group" style="margin-bottom: 0.95rem;">
                        <textarea class="form-control" formControlName="message" rows="6"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                      <button class="btn btn-warning form-control" [disabled]="contactUsForm.invalid">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>`
})
export class ContactComponent {
  contactUsForm: FormGroup;
  textValue = 'Message';
  constructor(){
    this.contactUsForm = new FormGroup({
      "userName":  new FormControl("", Validators.required),
      "userEmail":    new FormControl("", [
        Validators.required, 
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
      "userPhone": new FormControl(""),
      "message":  new FormControl("", Validators.required),
    });
  }

  submit(){
    console.log(this.contactUsForm);
  }
}