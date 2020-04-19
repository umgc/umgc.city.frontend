import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
