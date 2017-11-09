import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: `<div>
            <h1>Hi From Angular 5</h1>
            <router-outlet></router-outlet>
          </div>`
})
export class AppComponent {}