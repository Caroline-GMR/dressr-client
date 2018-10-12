// ---- Modules ---- //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



// ---- Components ---- //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

// ---- Guards ---- //
import { RequireAnonGuard } from '../app/guards/require-anon.guard';
import { RequireUserGuard } from '../app/guards/require-user.guard';
import { InitAuthGuard } from '../app/guards/init-auth.guard';

// ---- Services ---- //


// ---- Routes ---- //
const routes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [ RequireUserGuard ] },
  /* { path: 'login',  component: MovieListComponent },
  { path: 'signup', component: MovieDetailComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ 
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
