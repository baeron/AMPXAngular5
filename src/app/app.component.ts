import { Component } from '@angular/core';

@Component({
selector: 'my-app',
styles: [`.footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            line-height: 60px;
            background-color: #2b2c2e;}`
],
template: `<div style="height: 100%;">
            <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="/">AMPX</a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item mr-auto ml-auto">
                    <a class="nav-link" routerLink="/">Home</a>
                  </li>
                  <li class="nav-item mr-auto ml-auto">
                    <a class="nav-link" routerLink="/project">Project</a>
                  </li>
                  <li class="nav-item mr-auto ml-auto">
                    <a class="nav-link" routerLink="/about">About Us</a>
                  </li>
                  <li class="nav-item mr-auto ml-auto">
                    <a class="nav-link" routerLink="/service">Services</a>
                  </li>
                  <li class="nav-item mr-auto ml-auto">
                    <a class="nav-link" routerLink="/contacts">Contact Us</a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" routerLink="/signin">AMP X CORE</a>
                  </li>
                </ul>
              </div>
            </nav>
            <router-outlet></router-outlet>
            `/*<div class="footer">
              <div class="conteiner">
                <div class="row justify-content-center" style="width: 98%;">
                  <div class="col-2">
                    <span style="color: #ffffff;">1.403.863.0893</span>
                  </div>
                  <div class="col-2">
                    <span style="color: #ffffff;">info@ampx.ca</span>
                  </div>
                  <div class="col-2">
                    <span style="color: #ffffff;">Follow us on LinkedIn</span>
                  </div>
                  <div class="col-5">
                    <span style="color: #ffffff;">AMP X Consulting Inc. © 2017 | All Rights Reserved</span>
                  </div>
                </div>
              </div>
            </div>*/
          +`</div>`
})
export class AppComponent {}