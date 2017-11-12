import { Component} from '@angular/core';

@Component({
  selector: 'register-app',
  template: `<div class="container">
              <div class="border-top-1">
                <h3>Costomer Portal Register</h3>
                <form>
                  <div class="row justify-content-center mt-2">
                    <div class="form-group col-12 col-md-4 col-lg-3">
                      <input class="form-control" placeholder="Email"/>
                    </div>
                    <div class="form-group col-12 col-md-4 col-lg-3">
                      <input class="form-control" placeholder="Confirm Email"/>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <input class="col-2 offset-4" placeholder="Email"/>
                    <input class="col-2 ml-2" placeholder="Confirm Email"/>
                  </div>
                  <div class="row mt-2">
                    <input class="col-2 offset-4" placeholder="Email"/>
                    <input class="col-2 ml-2" placeholder="Confirm Email"/>
                  </div>
                </form>
              </div>
            </div>`
})
export class RegisterComponent { }