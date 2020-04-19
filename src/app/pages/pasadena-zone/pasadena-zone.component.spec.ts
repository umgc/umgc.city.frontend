import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaZoneComponent } from './pasadena-zone.component';

describe('PasadenaZoneComponent', () => {
  let component: PasadenaZoneComponent;
  let fixture: ComponentFixture<PasadenaZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasadenaZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
