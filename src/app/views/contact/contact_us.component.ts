import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'contact-app',
  template: `<div>
              <div>
                <img class="d-block img-fluid" src="https://i.imgur.com/K7EI8uX.jpg">
              </div>
              <div class="container">
                <form [formGroup]="contactUsForm" novalidate (ngSubmit)="submit()">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <input class="form-control" type="email" name="email" formControlName="userEmail" placeholder="Name" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <input class="form-control" type="email" name="email" formControlName="userEmail" placeholder="Email" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <input class="form-control" type="email" name="email" formControlName="userEmail" placeholder="Phone number (optional)" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <textarea class="form-control" style="height: 100%;" id="exampleTextarea" rows="6"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
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
  constructor(){
    this.contactUsForm = new FormGroup({
      "companyName":  new FormControl("", Validators.required),
      "userEmail":    new FormControl("", [
        Validators.required, 
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
      "userPassword": new FormControl("", Validators.required)
    });
  }

  submit(){
    console.log(this.contactUsForm);
  }
}