import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaMapKeyComponent } from './pasadena-map-key.component';

describe('PasadenaMapKeyComponent', () => {
  let component: PasadenaMapKeyComponent;
  let fixture: ComponentFixture<PasadenaMapKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasadenaMapKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaMapKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
