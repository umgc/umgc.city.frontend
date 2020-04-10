import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-usecase',
  templateUrl: './new-usecase.component.html',
  styleUrls: ['./new-usecase.component.css']
})
export class NewUsecaseComponent implements OnInit {

  title = "New Use Case";

  constructor() { }

  ngOnInit() {
  }

}
