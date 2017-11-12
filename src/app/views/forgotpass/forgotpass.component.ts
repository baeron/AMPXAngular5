import { Component} from '@angular/core';

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
  
  #cover-caption {
    width: 100%;
  }`],

  template: `
            <section id="cover">
              <div id="cover-caption">
                <div id="container" class="container">
                  <div class="row justify-content-center">
                    <div class="col-11 col-md-6 col-lg-5" style="background-color: white; border-radius: 25px;">
                      <div class="position-relative" style="margin-top: -60px;" >
                        <img  class="img-responsive" src="https://i.imgur.com/zl9teOq.png" style="background-color: white; padding: 10px; border-radius: 75px;">
                        <p class="h5">Customer Portal Forgot Password</p>
                      </div>
                      <form>
                        <div class="form-group">
                          <input class="form-control" placeholder="Company Name"/>
                        </div>
                        <div class="form-group">
                          <input class="form-control" placeholder="Email"/>
                        </div>
                        <div>
                          <button class="btn btn-warning form-control">
                            Send
                          </button>
                        </div>
                      </form>
                        <a routerLink="/signin">Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            `
/*            <div class="footer">
              <div class="row justify-content-center">
                <div class="col-3">
                  <span>First</span>
                </div>
                <div class="col-3">
                  <span>Second</span>
                </div>
                <div class="col-3">
                  <span>Ferst</span>
                </div>
                <div class="col-3">
                  <span>Ferst</span>
                </div>
              </div>
            </div>`*/
})
export class ForgotComponent { }