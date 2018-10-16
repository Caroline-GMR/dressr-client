// ---- Modules ---- //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

// ---- Pages ---- //
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddItemPageComponent } from './pages/add-item-page/add-item-page.component';
import { ItemDetailsPageComponent } from './pages/item-details-page/item-details-page.component';
import { ClosetPageComponent } from './pages/closet-page/closet-page.component';

// ---- Components ---- //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';

// ---- Guards ---- //
import { RequireAnonGuard } from '../app/guards/require-anon.guard';
import { RequireUserGuard } from '../app/guards/require-user.guard';
import { InitAuthGuard } from '../app/guards/init-auth.guard';

// ---- Routes ---- //
const routes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [ RequireUserGuard ] },
  { path: 'clothes/create',  component: AddItemPageComponent, canActivate: [ RequireUserGuard ]  },
  { path: 'clothes/:id',  component: ItemDetailsPageComponent, canActivate: [ RequireUserGuard ]  },
  { path: 'closet',  component: ClosetPageComponent, canActivate: [ RequireUserGuard ]  }

  /* { path: 'login',  component: MovieListComponent },
  { path: 'signup', component: MovieDetailComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    ProfilePageComponent,
    ItemCategoryComponent,
    AddItemPageComponent,
    ItemDetailsPageComponent,
    ClosetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FileUploadModule
  ],
  providers: [ 
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
