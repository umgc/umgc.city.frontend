import { Component, OnInit, Input } from '@angular/core';
import {PasadenaMapKeyComponent} from '../pasadena-map-key/pasadena-map-key.component';
import {PasadenaZoneComponent} from '../pasadena-zone/pasadena-zone.component';
import {MatDialog, MatDialogRef } from '@angular/material';
import { MapService} from '../../services/map.service';
import { MapShape } from '../../models/map-shape';
import { PasadenaZone } from '../../models/pasadena-zone';

@Component({
  selector: 'app-pasadena-map',
  templateUrl: './pasadena-map.component.html',
  styleUrls: ['./pasadena-map.component.css']
})
export class PasadenaMapComponent implements OnInit {
 @Input() dialogData: PasadenaZone[];

 MapKeyDialogRef: MatDialogRef<PasadenaMapKeyComponent>;
 MapZoneDialogRef: MatDialogRef<PasadenaZoneComponent>;

 zoneSymbol: string;
 mapZoneShapeList: MapShape[];


  constructor(private dialog: MatDialog, private mapService: MapService) {}

  ngOnInit(){
    this.mapZoneShapeList = this.mapService.getMapZoneShapeList();
  }

  openMapKeyDialog() {
    this.MapKeyDialogRef = this.dialog.open(PasadenaMapKeyComponent,
      {
        hasBackdrop: true,
        maxWidth: '30%',
      });
  }

  openZoningDialog(zoneSymbol: string){
    this.zoneSymbol = zoneSymbol;
    this.mapService.getPasadenaZones(this.zoneSymbol).subscribe((zone: PasadenaZone[]) => {this.dialogData = zone});
      console.log(this.dialogData);
    this.MapZoneDialogRef = this.dialog.open(PasadenaZoneComponent,
      {
      hasBackdrop:true,
      maxWidth: "50%",
      data: {zone: this.dialogData}
    });
  }
}

