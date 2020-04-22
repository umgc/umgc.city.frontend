import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { PasadenaZone } from "../models/pasadenaZone";
import { retry, catchError } from "rxjs/operators";
import { MapShape } from "../models/map-shape";

@Injectable({
  providedIn: "root",
})
export class MapService {
  private apiURL = environment.zoningJavaService;
  private pasadenaZone: PasadenaZone;
  private httpOptions: any;
  private httpParams: any; 
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
  }

  public sendGETRequestWithParameters(dataObject: Object){   
  let params = new HttpParams();
  params = params.append("requestData", JSON.stringify(dataObject));
  return params;
  }
  

  async getZoneData(mapShape: MapShape) {
    this.httpParams =  this.sendGETRequestWithParameters(mapShape);
    const result = await this.httpClient.get<PasadenaZone>(this.apiURL, {params: this.httpParams})
    .toPromise();
  return result;
  }





  // Error handling
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
