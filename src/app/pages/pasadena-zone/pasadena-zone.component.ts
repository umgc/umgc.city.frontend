import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PasadenaZone } from '../../models/pasadena-zone';


@Component({
  selector: 'app-pasadena-zone',
  templateUrl: './pasadena-zone.component.html',
  styleUrls: ['./pasadena-zone.component.css']
})
export class PasadenaZoneComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PasadenaZoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PasadenaZone[]) {}

    ngOnInit() {
    }
  
    closeDialog() {
      this.dialogRef.close();
    }
  

}
