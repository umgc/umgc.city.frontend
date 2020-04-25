import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment.prod";
import { PasadenaZone } from "../models/pasadenaZone";
import { retry, catchError } from "rxjs/operators";
import { MapShape } from "../models/map-shape";

@Injectable({
  providedIn: "root",
})
export class MapService {
  private apiURL = "api/city-zoning-project-management/pasadena/zones/";
  private zoneSymbol: string;
  private mapZoneShapeList: MapShape[];

  constructor(private http: HttpClient) {}

  getPasadenaZones(symbol: string): Observable<PasadenaZone[]> {
    return this.http
      .get<PasadenaZone[]>(this.apiURL + symbol)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getZoneSymbol() {
    return this.zoneSymbol;
  }

  setZoneSymbol(zoneSymbol: string) {
    this.zoneSymbol = zoneSymbol;
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
