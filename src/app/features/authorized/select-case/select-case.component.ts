import { Component, OnInit } from "@angular/core";
import { AppRepoService } from "src/app/services/repository.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-case',
  templateUrl: './select-case.component.html',
  styleUrls: ['./select-case.component.css']
})
export class SelectCaseComponent implements OnInit {
  title = "Existing Use Case";
  
  rbSelected: any;
  cityId: string;
  useCases: any = [];

  constructor(private appRepoService: AppRepoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cityId = this.appRepoService.cityId;
    this.getUseCaseByCityId();
  }

  async getUseCaseByCityId() {
    this.useCases = await this.appRepoService
      .getUseCaseByCityId(this.cityId);
  }

  async deleteUseCase() {
    if (typeof this.rbSelected == "undefined") alert("Please select a use case.");
    var result = confirm("Are you sure you would like to delete the selected use case?");
    if (result) {
      await this.appRepoService
      .deleteUseCase(this.rbSelected);
      this.getUseCaseByCityId();
    }    
  }
  
  redirectToEdit() {
    if (typeof this.rbSelected === "undefined") {
      alert("Please select a use case.");
    } else {
      var useCaseId = this.rbSelected;
      console.log(this.rbSelected);
      this.router.navigate(['/authorized/edit-case'], { queryParams: { id: `${this.rbSelected}`}});
    }
  }
}
