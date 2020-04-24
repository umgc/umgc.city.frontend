import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MapKeyDialogComponent } from "./map-key-dialog/map-key-dialog.component";
import { MapZoneDialogComponent } from "./map-zone-dialog/map-zone-dialog.component";
import { PasadenaZone } from "../../models/pasadenaZone";
import { MapShape } from "../../models/map-shape";
import * as mapData from "./map-data.json";
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: "app-pasadena",
  templateUrl: "./pasadena.component.html",
  styleUrls: ["./pasadena.component.css"],
})
export class PasadenaComponent {
  mapKeyDialogRef: MatDialogRef<MapKeyDialogComponent>;
  mapZoneDialogRef: MatDialogRef<MapZoneDialogComponent>;
  zoneShapes: any = (mapData as any).default;
  zoneShape: MapShape;
  pasadenaZone: PasadenaZone;

  
  constructor(private dialog: MatDialog, private mapService: MapService) {
    console.log(this.zoneShapes);
  }

  openMapKeyDialog() {
    this.dialog.open(MapKeyDialogComponent, {
      hasBackdrop: true,
      maxWidth: "30%",
    });
  }

  openZoningDialog(zone: any) {
    this.zoneShape = new MapShape(zone.codeLabel, zone.zoneCode, zone.overlayCode);
    let response = this.mapService.getZoneData(this.zoneShape)
    response.subscribe((data: PasadenaZone) => {
      this.pasadenaZone = data;
      this.dialog.open(MapZoneDialogComponent, { data: this.pasadenaZone});
      console.log(data);
    });      
      }
    
}
