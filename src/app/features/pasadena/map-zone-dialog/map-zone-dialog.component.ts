import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-map-zone-dialog",
  templateUrl: "./map-zone-dialog.component.html",
  styleUrls: ["./map-zone-dialog.component.css"],
})
export class MapZoneDialogComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<MapZoneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
   
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
