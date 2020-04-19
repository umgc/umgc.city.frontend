import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UploadUsecaseComponent } from './pages/upload-usecase/upload-usecase.component';
import { HelpComponent } from './pages/help/help.component';
import { NewUsecaseComponent } from './pages/new-usecase/new-usecase.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PasadenaMapComponent } from './pages/pasadena-map/pasadena-map.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { PasadenaHeaderComponent } from './layout/pasadena/pasadena-header/pasadena-header.component';
import { PasadenaFooterComponent } from './layout/pasadena/pasadena-footer/pasadena-footer.component';
import { PasadenaLayoutComponent } from './layout/pasadena/pasadena-layout/pasadena-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorizedNavComponent } from './layout/authorized/authorized-nav/authorized-nav.component';
import { AuthorizedFooterComponent } from './layout/authorized/authorized-footer/authorized-footer.component';
import { AuthorizedLayoutComponent } from './layout/authorized/authorized-layout/authorized-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { PasadenaMapKeyComponent } from './pages/pasadena-map-key/pasadena-map-key.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { PasadenaZoneComponent } from './pages/pasadena-zone/pasadena-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    UploadUsecaseComponent,
    HelpComponent,
    NewUsecaseComponent,
    WelcomeComponent,
    PasadenaMapComponent,
    PageContentComponent,
    PasadenaHeaderComponent,
    PasadenaFooterComponent,
    PasadenaLayoutComponent,
    LandingPageComponent,
    AuthorizedNavComponent,
    AuthorizedFooterComponent,
    AuthorizedLayoutComponent,
    PasadenaMapKeyComponent,
    PasadenaZoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    PasadenaMapKeyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
