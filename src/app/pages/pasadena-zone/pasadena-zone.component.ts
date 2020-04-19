import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MapService } from "src/app/services/map.service";
import { PasadenaZone } from "../../models/pasadenaZone";

@Component({
  selector: "app-pasadena-zone",
  templateUrl: "./pasadena-zone.component.html",
  styleUrls: ["./pasadena-zone.component.css"],
})
export class PasadenaZoneComponent implements OnInit {
  PasadenaZones: any[];
  zoneSymbol: string;

  constructor(
    public dialogRef: MatDialogRef<PasadenaZoneComponent>,
    private mapService: MapService
  ) {}

  ngOnInit() {
    this.zoneSymbol = this.mapService.getZoneSymbol();
    this.mapService
      .getPasadenaZones(this.zoneSymbol)
      .subscribe((zone: PasadenaZone[]) => {
        this.PasadenaZones = zone;
        console.log(zone);
      });
  }
}
