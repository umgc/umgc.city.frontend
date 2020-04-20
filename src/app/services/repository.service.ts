import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Resolve } from "@angular/router";
import * as _m from "moment";
import { UserSignData } from "../models";
import { NewUser } from "../models/newUser";

@Injectable({
  providedIn: "root",
})
export class AppRepoService {
  private loggedInToken = "sure I am logged in";
  private loggedInTokenExpires: _m.Moment;
  private httpOptions: any;
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
