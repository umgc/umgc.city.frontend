import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { MapKeyDialogComponent } from "./map-key-dialog/map-key-dialog.component";
import { MapZoneDialogComponent } from "./map-zone-dialog/map-zone-dialog.component";
import * as mapData from "./map-data.json";

@Component({
  selector: "app-pasadena",
  templateUrl: "./pasadena.component.html",
  styleUrls: ["./pasadena.component.css"],
})
export class PasadenaComponent implements OnInit {
  mapKeyDialogRef: MatDialogRef<MapKeyDialogComponent>;
  mapZoneDialogRef: MatDialogRef<MapZoneDialogComponent>;
  zones: any = (mapData as any).default;

  constructor(private dialog: MatDialog) {
    console.log(this.zones);
  }

  ngOnInit(): void {}

  openMapKeyDialog() {
    this.mapKeyDialogRef = this.dialog.open(MapKeyDialogComponent, {
      hasBackdrop: true,
      maxWidth: "30%",
    });
  }

  openZoningDialog(symbol: string) {
    this.mapZoneDialogRef = this.dialog.open(MapZoneDialogComponent, {
      hasBackdrop: true,
    });
    //this.mapService.setZoneSymbol(symbol);
  }
}
