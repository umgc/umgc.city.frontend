import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Resolve } from "@angular/router";
import * as _m from "moment";
import { UserSignData } from "../models";
import { UseCase } from '../models/useCase';
import { environment } from "../../environments/environment.prod";
import { NewUser } from "../models/newUser";
import { MapShape } from "../models/map-shape";
import { PasadenaZone } from "../models/pasadenaZone";

@Injectable({
  providedIn: "root",
})
export class AppRepoService {
  private loggedInToken = "sure I am logged in";
  private loggedInTokenExpires: _m.Moment;
  private httpOptions: any;
  //private apiURL = environment.apiBaseUrl;

  private apiURL = 'http://localhost:5000/city-zoning-project-management';
  knownUseCases: { caseid: string, usesCases: UseCase[] } = {} as any;
 
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
  }

  async commTest(): Promise<string> {
    let response;
    try {
      response = await this.httpClient.get("api", this.httpOptions).toPromise();
      return response;
    } catch (e) {
      console.log(e);
    }
    return "Comm test finish -- error, check console.";
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
    return true;
    // expects a post?
    // need an endpoint
    // receives what
    //this.httpClient.post('')
  }

  signUserOut(): void {
    this.loggedInToken = null;
    this.loggedInTokenExpires = null;
  }

  async getUseCaseByCityId(cityId: string): Promise<UseCase[]> {
    if (this.knownUseCases[cityId]) {
      return this.knownUseCases[cityId];
    }

    const useCase = await this.httpClient
      .get<UseCase[]>(this.apiURL + "/cities/" + cityId + "/usecases", { responseType: 'json' })//this.apiURL + symbol)
      .toPromise();

    this.knownUseCases[cityId] = useCase;

    return useCase
  }

  async createUseCase(useCase: UseCase) {
    const result = await this.httpClient.post(this.apiURL + "/usecases", useCase).toPromise();
  }

  async editUseCase(useCase: UseCase) {
    const result = await this.httpClient.put(this.apiURL + "/usecases", useCase).toPromise();
  }

  async deleteUseCase(landUseId: string) {
    const result = await this.httpClient.delete(this.apiURL + "/usecases/" + landUseId).toPromise();
  }

  async submitNewUser(newUser: NewUser): Promise<any> {
    const data = new FormData();
    data.append("firstName", newUser.firstName);
    data.append("lastName", newUser.lastnName);
    data.append("email", newUser.emailAddress);
    data.append("password", newUser.password);
    data.append("city", newUser.city);
    data.append("state", newUser.state);
    const result = await this.httpClient
      .post("/api/city-zoning-project-management/users", newUser, {
        responseType: "json",
      })
      .toPromise();
    return result;
  }
}
