import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { PasadenaHeaderComponent } from "./features/pasadena/pasadena-header/pasadena-header.component";
import { PasadenaFooterComponent } from "./features/pasadena/pasadena-footer/pasadena-footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
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
import { MapService } from './services/map.service';
import { QuickReferenceComponent } from './features/pasadena/quick-reference/quick-reference.component';
import { ChatModule } from "./features/chat/chat.module";
@NgModule({
  declarations: [
    AppComponent,
    MapKeyDialogComponent,
    MapZoneDialogComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    PasadenaHeaderComponent,
    PasadenaFooterComponent,
    SigninComponent,
    SignupComponent,
    PasadenaComponent,
    NewCaseComponent,
    SelectCaseComponent,
    EditCaseComponent,
    UploadCaseComponent,
    QuickReferenceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChatModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
  ],
  exports: [MatButtonModule, MatDialogModule],
  entryComponents: [MapKeyDialogComponent, MapZoneDialogComponent],
  bootstrap: [AppComponent],
  providers: [MapService]
})
export class AppModule {}
