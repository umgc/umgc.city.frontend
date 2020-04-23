import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { AuthorizedComponent } from "./authorized.component";
import { NewCaseComponent } from "./new-case/new-case.component";
import { SelectCaseComponent } from "./select-case/select-case.component";
import { UploadCaseComponent } from "./upload-case/upload-case.component";
import { EditCaseComponent } from './edit-case/edit-case.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthorizedComponent,
    children: [
      {
        path: "landing",
        component: LandingComponent,
      },
      {
        path: "new-case",
        component: NewCaseComponent,
      },
      {
        path: "select-case",
        component: SelectCaseComponent,
      },
      {
        path: "edit-case",
        component: EditCaseComponent,
      },
      {
        path: "upload-case",
        component: UploadCaseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedRoutingModule {}
