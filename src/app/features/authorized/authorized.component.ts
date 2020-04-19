import { Component, OnInit } from "@angular/core";
import { AppRepoService } from "src/app/services/repository.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-authorized",
  templateUrl: "./authorized.component.html",
  styleUrls: ["./authorized.component.css"],
})
export class AuthorizedComponent implements OnInit {
  constructor(private repoService: AppRepoService, private router: Router) {}

  ngOnInit(): void {}

  signOut(): void {
    this.repoService.signUserOut();
    this.router.navigateByUrl("/home");
  }
}
