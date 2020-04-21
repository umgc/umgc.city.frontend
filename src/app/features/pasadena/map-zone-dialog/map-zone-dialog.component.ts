import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MapService } from "src/app/services/map.service";
import { PasadenaZone } from "src/app/models/pasadenaZone";

@Component({
  selector: "app-map-zone-dialog",
  templateUrl: "./map-zone-dialog.component.html",
  styleUrls: ["./map-zone-dialog.component.css"],
})
export class MapZoneDialogComponent implements OnInit {
  pasadenaZones: any[];
  zoneSymbol: string;

  constructor(
    public dialogRef: MatDialogRef<MapZoneDialogComponent>,
    private mapService: MapService
  ) {}

  ngOnInit() {
   
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
