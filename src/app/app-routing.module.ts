import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent} from "./home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UploadUsecaseComponent} from "./upload-usecase/upload-usecase.component";
import {HelpComponent} from "./help/help.component";
import {NewUsecaseComponent} from "./new-usecase/new-usecase.component";
import {WelcomeComponent} from "./welcome/welcome.component";


const routes: Routes = [
  // tells the router to always show the home component by default
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Sign-In', component: SignInComponent },
  {path: 'Sign-Up', component: SignUpComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Upload Use Case', component: UploadUsecaseComponent},
  { path: 'Help', component: HelpComponent},
  { path: 'New Use Case', component: NewUsecaseComponent},
  {path: 'Welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


