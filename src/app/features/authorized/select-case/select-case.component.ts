import { Component, OnInit } from "@angular/core";
import { AppRepoService } from "src/app/services/repository.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-select-case",
  templateUrl: "./select-case.component.html",
  styleUrls: ["./select-case.component.css"],
})
export class SelectCaseComponent implements OnInit {
  title = "Existing Use Case";

  rbSelected: any;
  cityId: string;
  useCases: any = [];

  constructor(
    private appRepoService: AppRepoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cityId = this.appRepoService.cityId;
    this.getUseCaseByCityId();
  }

  async getUseCaseByCityId() {
    this.useCases = await this.appRepoService.getUseCaseByCityId(this.cityId);
  }

  async deleteUseCase() {
    if (typeof this.rbSelected == "undefined") {
      Swal.fire("Missing Input", "Please select a use case.", "error");
    }
    const answer = await Swal.fire({
      title: "Confirm Deletion",
      text: "Are you sure you would like to delete the selected use case?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!answer.value) {
      return;
    }

    await this.appRepoService.deleteUseCase(this.rbSelected);

    this.getUseCaseByCityId();
    Swal.fire("Success", "The case has been deleted", "success");
  }

  redirectToEdit() {
    if (typeof this.rbSelected === "undefined") {
      Swal.fire("Missing Input", "Please select a use case.", "error");
    } else {
      var useCaseId = this.rbSelected;
      console.log(this.rbSelected);
      this.router.navigate(["/authorized/edit-case"], {
        queryParams: { id: `${this.rbSelected}` },
      });
    }
  }
}
