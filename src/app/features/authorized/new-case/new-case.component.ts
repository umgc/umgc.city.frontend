import { Component, OnInit } from "@angular/core";
import { AppRepoService } from "src/app/services/repository.service";
import { ActivatedRoute } from "@angular/router";
import { UseCase } from "src/app/models/useCase";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-new-case",
  templateUrl: "./new-case.component.html",
  styleUrls: ["./new-case.component.css"],
})
export class NewCaseComponent implements OnInit {
  title = "Create A Use Case";

  useCase: UseCase = new UseCase();
  cityId: string;

  constructor(
    private route: ActivatedRoute,
    private appRepoService: AppRepoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cityId = this.appRepoService.cityId;
  }

  async create() {
    if (typeof this.cityId == "undefined")
      Swal.fire("Creation Error", "Unable to create the use case.", "error");
    this.useCase.cityId = this.cityId;
    await this.appRepoService.createUseCase(this.useCase);
    this.router.navigate(["/authorized/select-case"]);
  }
}
