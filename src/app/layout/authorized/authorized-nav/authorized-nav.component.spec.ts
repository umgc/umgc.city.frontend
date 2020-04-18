import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedNavComponent } from './authorized-nav.component';

describe('AuthorizedNavComponent', () => {
  let component: AuthorizedNavComponent;
  let fixture: ComponentFixture<AuthorizedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
