import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent} from "./pages/home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {UploadUsecaseComponent} from "./pages/upload-usecase/upload-usecase.component";
import {HelpComponent} from "./help/help.component";
import {NewUsecaseComponent} from "./pages/new-usecase/new-usecase.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {PasadenaMapComponent} from "./pages/pasadena-map/pasadena-map.component";
import { PasadenaLayoutComponent } from './layout/pasadena/pasadena-layout/pasadena-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorizedLayoutComponent } from './layout/authorized/authorized-layout/authorized-layout.component';


const routes: Routes = [
  { 
    path: '',
    component: PasadenaLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'},
    ]
  },
  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent},
      { path: 'usecase/upload', component: UploadUsecaseComponent},
      { path: 'help', component: HelpComponent},
      { path: 'usecase/new', component: NewUsecaseComponent},
      { path: 'welcome', component: WelcomeComponent}
    ]
  }


];
  

  


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


