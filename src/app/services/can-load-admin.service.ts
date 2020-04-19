import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { AppRepoService } from "./repository.service";

@Injectable({
  providedIn: "root",
})
export class CanLoadAdminSection implements CanLoad {
  constructor(private repoService: AppRepoService) {}

  canLoad(): boolean {
    return this.repoService.isLoggedIn();
  }
}
