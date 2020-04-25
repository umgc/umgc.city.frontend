import { Component, OnInit } from "@angular/core";
import { UserSignData } from "src/app/models";
import { AppRepoService } from "src/app/services/repository.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  title = "User Sign In";
  signInData: UserSignData = {} as any;
  isSigningIn = false;
  constructor(private repoService: AppRepoService, private router: Router) {}

  ngOnInit(): void {}

  async attemptSignIn(): Promise<void> {
    this.isSigningIn = true;
    let wasSignSuccessful: boolean;

    if (this.signInData.email == "comtest@me.com") {
      try {
        const testResult = await this.repoService.commTest();
        Swal.fire("Comm Test Message", testResult, "success");
      } catch (e) {
        console.log(e);
        Swal.fire("Comm Test Message", e, "error");
      } finally {
        this.isSigningIn = false;
      }
      return;
    }

    try {
      wasSignSuccessful = await this.repoService.signUserIn(this.signInData);
    } finally {
      this.isSigningIn = false;
    }
    if (!wasSignSuccessful) {
      Swal.fire("Invalid Login", "The user credentials are invalid", "error");
      return;
    }
    if (this.signInData.rememberMeFlag) {
      localStorage.setItem("persistedEmail", this.signInData.email);
    } else {
      localStorage.removeItem("persistedEmail");
    }
    this.router.navigateByUrl("/authorized/landing");
  }

  cancel() {
    this.router.navigate(["/home"]);
  }
}
