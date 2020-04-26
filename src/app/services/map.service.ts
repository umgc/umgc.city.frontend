import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { PasadenaZone } from "../models/pasadenaZone";
import { catchError } from "rxjs/operators";
import { MapShape } from "../models/map-shape";

@Injectable({
  providedIn: "root",
})
export class MapService {

 private apiURL = "api/city-zoning-project-management/";;
 private httpOptions: any;
 
 constructor(private httpClient: HttpClient) {
  this.httpOptions = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };
}

  public getZoneData(mapShape: MapShape){
    return this.httpClient.post(this.apiURL + '/pasadena/zones', mapShape);
  }
}

