// ---- Modules ---- //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ---- Components ---- //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

// ---- Guards ---- //

// ---- Routes ---- //
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  /* { path: 'login',  component: MovieListComponent },
  { path: 'signup', component: MovieDetailComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
