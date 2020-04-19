import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-pasadena-map-key",
  templateUrl: "./pasadena-map-key.component.html",
  styleUrls: ["./pasadena-map-key.component.css"],
})
export class PasadenaMapKeyComponent {
  constructor(public dialogRef: MatDialogRef<PasadenaMapKeyComponent>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
