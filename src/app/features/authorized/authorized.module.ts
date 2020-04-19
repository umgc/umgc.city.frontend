import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing/landing.component";
import { AuthorizedRoutingModule } from "./authorized-routing.module";
import { AuthorizedComponent } from "./authorized.component";

@NgModule({
  declarations: [LandingComponent, AuthorizedComponent],
  imports: [CommonModule, AuthorizedRoutingModule],
  exports: [],
  providers: [],
})
export class AuthorizedUsageModule {}
