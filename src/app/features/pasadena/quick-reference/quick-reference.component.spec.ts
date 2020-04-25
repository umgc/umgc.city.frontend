import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickReferenceComponent } from './quick-reference.component';

describe('QuickReferenceComponent', () => {
  let component: QuickReferenceComponent;
  let fixture: ComponentFixture<QuickReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
