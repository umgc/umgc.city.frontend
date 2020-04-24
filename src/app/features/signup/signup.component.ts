import { Component, OnInit } from "@angular/core";
import { NewUser } from "src/app/models/newUser";
import { AppRepoService } from "src/app/services/repository.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  title = "Sign Up";
  newUser: NewUser = {} as any;

  constructor(private repoService: AppRepoService, private router: Router) {}

  ngOnInit(): void {}

  async submitNewUser(): Promise<void> {
    try {
      const response = this.repoService.submitNewUser(this.newUser);
      alert("Account created successfully.");
      this.router.navigate(['/signin']);
    } catch (e) {
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
