import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { UploadUsecaseComponent } from './upload-usecase/upload-usecase.component';
import { HelpComponent } from './help/help.component';
import { NewUsecaseComponent } from './new-usecase/new-usecase.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignInComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    UploadUsecaseComponent,
    HelpComponent,
    NewUsecaseComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
