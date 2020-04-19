import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-map-key-dialog",
  templateUrl: "./map-key-dialog.component.html",
  styleUrls: ["./map-key-dialog.component.css"],
})
export class MapKeyDialogComponent {
  constructor(public dialogRef: MatDialogRef<MapKeyDialogComponent>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
