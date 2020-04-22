import { Component, OnInit } from "@angular/core";
import { PasadenaMapKeyComponent } from "../pasadena-map-key/pasadena-map-key.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MapService } from "../../services/map.service";
// import * as mapData from "/assets/map-data.json";

@Component({
  selector: "app-pasadena-map",
  templateUrl: "./pasadena-map.component.html",
  styleUrls: ["./pasadena-map.component.css"],
})
export class PasadenaMapComponent implements OnInit {
  MapKeyDialogRef: MatDialogRef<PasadenaMapKeyComponent>;
  MapZoneDialogRef: MatDialogRef<PasadenaZoneComponent>;
  zones = [];

  constructor(private dialog: MatDialog, private mapService: MapService) {}

  ngOnInit() {}

  openMapKeyDialog() {
    this.MapKeyDialogRef = this.dialog.open(PasadenaMapKeyComponent, {
      hasBackdrop: true,
      maxWidth: "30%",
    });
  }

  openZoningDialog(symbol: string) {
    this.MapZoneDialogRef = this.dialog.open(PasadenaZoneComponent, {
      hasBackdrop: true,
    });
  }
}
