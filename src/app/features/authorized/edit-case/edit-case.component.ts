import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRepoService } from 'src/app/services/repository.service';
import { UseCase } from 'src/app/models/useCase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-case',
  templateUrl: './edit-case.component.html',
  styleUrls: ['./edit-case.component.css']
})
export class EditCaseComponent implements OnInit {

  title = "Edit Use Case";

  useCases: any = [];
  useCase: UseCase;
  useCaseId: string;
  zoneId: string;
  cityId: string;

  constructor(private route: ActivatedRoute, private appRepoService: AppRepoService, private router: Router) { }

  ngOnInit(): void {
    this.useCaseId = this.route.snapshot.queryParams["id"];
    this.cityId = this.route.snapshot.queryParams["cityid"];
    this.getUseCase();
  }

  async getUseCase() {
    this.useCases = await this.appRepoService
      .getUseCaseByCityId(this.cityId);
    if (this.useCases == []) return;

    this.useCase = this.useCases.find(obj => obj.zoneLandUseId === this.useCaseId);
    this.zoneId = this.useCase.zoneId;
  }

  async edit() {
    //delete use case
    await this.appRepoService.editUseCase(this.useCase);
    this.router.navigate(['/authorized/select-case'], { queryParams: { cityid: `${this.cityId}` } });
  }

  cancel() {
    this.router.navigate(['/authorized/select-case'], { queryParams: { cityid: `${this.cityId}` } });
  }
}
