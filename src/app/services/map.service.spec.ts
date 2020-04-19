import { TestBed, async } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { MapService } from "./map.service";

describe("MapService", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  it("should be created", () => {
    const service: MapService = TestBed.get(MapService);
    expect(service).toBeTruthy();
  });
});
