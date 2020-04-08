import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaMapComponent } from './pasadena-map.component';

describe('PasadenaMapComponent', () => {
  let component: PasadenaMapComponent;
  let fixture: ComponentFixture<PasadenaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasadenaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
