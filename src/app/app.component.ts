import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: `<div>
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
          </div>`
})
export class AppComponent {}