import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-case",
  templateUrl: "./new-case.component.html",
  styleUrls: ["./new-case.component.css"],
})
export class NewCaseComponent implements OnInit {
  title = "Create A Use Case";

  constructor() {}

  ngOnInit(): void {}
}
