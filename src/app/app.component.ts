import { Component, OnInit } from "@angular/core";
import { MapShape } from "./models/map-shape";
import mapData from "../assets/data.json";
import { MapService } from "./services/map.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UMGC City Admin Portal";
  mapZoningList: MapShape[] = mapData.zones;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService..setMapShapeList(this.mapZoningList);
  }
}
