import { Component, OnInit } from "@angular/core";
import { NewUser } from "src/app/models/newUser";
import { AppRepoService } from "src/app/services/repository.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  title = "Sign Up";
  newUser: NewUser = {} as any;

  constructor(private repoService: AppRepoService) {}

  ngOnInit(): void {}

  async submitNewUser(): Promise<void> {
    try {
      const response = this.repoService.submitNewUser(this.newUser);
      console.log(response);
    } catch (e) {
      // _swal(
      //   "Server Error",
      //   "Unable to create an account at this time. Try again later!",
      //   "eeror"
      // );
      console.log(e);
    }
  }
}
