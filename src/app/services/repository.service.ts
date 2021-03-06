import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import * as _m from "moment";
import { UserSignData } from "../models";
import { UseCase } from "../models/useCase";
import { NewUser } from "../models/newUser";

@Injectable({
  providedIn: "root",
})
export class AppRepoService {
  private loggedInToken = "sure I am logged in";
  private loggedInTokenExpires: _m.Moment;
  private httpOptions: any;
  private apiURL = "api/city-zoning-project-management";

  knownUseCases: { caseid: string; usesCases: UseCase[] } = {} as any;
  cityId: string;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
  }

  async commTest(): Promise<string> {
    const callHttpOptions = Object.assign(this.httpOptions, {
      responseType: "text",
    });
    const response = await this.httpClient
      .get<string>("api", callHttpOptions)
      .toPromise();
    return response as any;
  }

  isLoggedIn(): boolean {
    // need to check token expiration also
    return !!this.loggedInToken;
  }

  async signUserIn(signData: UserSignData): Promise<boolean> {
    if (!signData.email || !signData.password) {
      Promise.reject("credentials were not supplied");
    }

    const credsFormData = new FormData();
    credsFormData.append("email", signData.email);
    credsFormData.append("password", signData.password);

    try {
      var result = await this.httpClient
        .post<NewUser>(this.apiURL + "/login", signData, {
          responseType: "json",
        })
        .toPromise();
    } catch {
      return false;
    }

    this.cityId = result.city;
    localStorage.setItem("cityId", this.cityId);
    return true;
  }

  signUserOut(): void {
    this.loggedInToken = null;
    this.loggedInTokenExpires = null;
    this.cityId = null;
  }

  async getUseCaseByCityId(cityId: string): Promise<UseCase[]> {
    const useCase = await this.httpClient
      .get<UseCase[]>(`${this.apiURL}/cities/${this.cityId}/usecases`, {
        responseType: "json",
      })
      .toPromise();

    return useCase;
  }

  async createUseCase(useCase: UseCase) {
    const result = await this.httpClient
      .post(this.apiURL + "/usecases", useCase)
      .toPromise();
  }

  async editUseCase(useCase: UseCase) {
    const result = await this.httpClient
      .put(this.apiURL + "/usecases", useCase)
      .toPromise();
  }

  async deleteUseCase(landUseId: string) {
    const result = await this.httpClient
      .delete(this.apiURL + "/usecases/" + landUseId)
      .toPromise();
  }

  async submitNewUser(newUser: NewUser): Promise<any> {
    var result = await this.httpClient
      .post(this.apiURL + "/users", newUser, {
        responseType: "json",
      })
      .toPromise();
  }
}
