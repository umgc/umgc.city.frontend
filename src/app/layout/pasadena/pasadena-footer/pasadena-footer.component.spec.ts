import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaFooterComponent } from './pasadena-footer.component';

describe('PasadenaFooterComponent', () => {
  let component: PasadenaFooterComponent;
  let fixture: ComponentFixture<PasadenaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasadenaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
