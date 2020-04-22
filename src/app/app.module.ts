import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { PasadenaMapComponent } from "./pages/pasadena-map/pasadena-map.component";
import { PasadenaHeaderComponent } from "./layout/pasadena/pasadena-header/pasadena-header.component";
import { PasadenaFooterComponent } from "./layout/pasadena/pasadena-footer/pasadena-footer.component";
import { PasadenaLayoutComponent } from "./layout/pasadena/pasadena-layout/pasadena-layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { PasadenaMapKeyComponent } from "./pages/pasadena-map-key/pasadena-map-key.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { PasadenaZoneComponent } from "./pages/pasadena-zone/pasadena-zone.component";
import {
  SigninComponent,
  SignupComponent,
  HomeComponent,
  MapKeyDialogComponent,
  MapZoneDialogComponent,
  PasadenaComponent,
} from "./features";
import { NewCaseComponent } from "./features/authorized/new-case/new-case.component";
import { SelectCaseComponent } from "./features/authorized/select-case/select-case.component";
import { EditCaseComponent } from "./features/authorized/edit-case/edit-case.component";
import { UploadCaseComponent } from "./features/authorized/upload-case/upload-case.component";
@NgModule({
  declarations: [
    AppComponent,
    MapKeyDialogComponent,
    MapZoneDialogComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    PasadenaMapComponent,
    PasadenaHeaderComponent,
    PasadenaFooterComponent,
    PasadenaLayoutComponent,
    PasadenaMapKeyComponent,
    PasadenaZoneComponent,
    SigninComponent,
    SignupComponent,
    PasadenaComponent,
    NewCaseComponent,
    SelectCaseComponent,
    EditCaseComponent,
    UploadCaseComponent,
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
    MatButtonModule,
  ],
  exports: [MatButtonModule, MatDialogModule],
  entryComponents: [MapKeyDialogComponent, MapZoneDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
