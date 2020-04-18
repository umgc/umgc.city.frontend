import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsecaseComponent } from './new-usecase.component';

describe('NewUsecaseComponent', () => {
  let component: NewUsecaseComponent;
  let fixture: ComponentFixture<NewUsecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUsecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
