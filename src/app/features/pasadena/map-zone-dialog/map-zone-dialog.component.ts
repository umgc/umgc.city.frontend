import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PasadenaZone } from 'src/app/models';

@Component({
  selector: "app-map-zone-dialog",
  templateUrl: "./map-zone-dialog.component.html",
  styleUrls: ["./map-zone-dialog.component.css"],
})
export class MapZoneDialogComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<MapZoneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PasadenaZone) {
  
      console.log('Dialog:');
      console.log(data);
      
     
  }

  ngOnInit() {
   
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
