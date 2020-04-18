import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUsecaseComponent } from './upload-usecase.component';

describe('UploadUsecaseComponent', () => {
  let component: UploadUsecaseComponent;
  let fixture: ComponentFixture<UploadUsecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadUsecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
