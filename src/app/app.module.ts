import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

//routes
import { appRoute } from './app-routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarModule } from 'ng-sidebar';
//service
import{LoginService} from './login/login.service'
import {ResearchdataService} from './services/research.service'
//extra
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
//auth
import {AuthGuard} from './auth/auth.guard'
@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [LoginService,ResearchdataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
