import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedFooterComponent } from './authorized-footer.component';

describe('AuthorizedFooterComponent', () => {
  let component: AuthorizedFooterComponent;
  let fixture: ComponentFixture<AuthorizedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
