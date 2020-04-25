import { Component, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatDialogRef } from "@angular/material/dialog";
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-quick-reference',
  templateUrl: './quick-reference.component.html',
  styleUrls: ['./quick-reference.component.css']
})
export class QuickReferenceComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<QuickReferenceComponent>,) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
