import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaHeaderComponent } from './pasadena-header.component';

describe('PasadenaHeaderComponent', () => {
  let component: PasadenaHeaderComponent;
  let fixture: ComponentFixture<PasadenaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasadenaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
