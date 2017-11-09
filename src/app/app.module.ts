import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
//
import { AboutComponent }   from './views/about/about_us.component';
import { ServiceComponent } from './views/services/service.component';
import { ContactComponent } from './views/contact/contact_us.component';
import { LoginComponent }   from './views/login/login.component';
//
import { NotFoundComponent } from './views/not_found/not-found.component';
//
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'signin', component: LoginComponent }
]

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, AboutComponent, ServiceComponent, ContactComponent, LoginComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }