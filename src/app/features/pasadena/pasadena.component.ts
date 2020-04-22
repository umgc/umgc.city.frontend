import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MapKeyDialogComponent } from "./map-key-dialog/map-key-dialog.component";
import { MapZoneDialogComponent } from "./map-zone-dialog/map-zone-dialog.component";
import { MapService } from "../../services/map.service";
import { PasadenaZone } from "../../models/pasadenaZone";
import { MapShape } from "../../models/map-shape";
import * as mapData from "./map-data.json";

@Component({
  selector: "app-pasadena",
  templateUrl: "./pasadena.component.html",
  styleUrls: ["./pasadena.component.css"],
})
export class PasadenaComponent implements OnInit {
  mapKeyDialogRef: MatDialogRef<MapKeyDialogComponent>;
  mapZoneDialogRef: MatDialogRef<MapZoneDialogComponent>;
  zoneShapeData: any = (mapData as any).default;
  zoneData: any;

  constructor(private dialog: MatDialog, private mapService: MapService) {
    console.log(this.zoneShapeData);
  }

  ngOnInit(): void {}

  openMapKeyDialog() {
    this.mapKeyDialogRef = this.dialog.open(MapKeyDialogComponent, {
      hasBackdrop: true,
      maxWidth: "30%",
    });
  }


  openZoningDialog(zoneShapeData: any) {
    this.zoneData = this.mapService.getZoneData(zoneShapeData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.zoneData;
    this.dialog.open(MapZoneDialogComponent, dialogConfig);
    
  }
}
