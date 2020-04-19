import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedLayoutComponent } from './authorized-layout.component';

import { Component } from '@angular/core';

@Component({selector: 'app-authorized-nav', template: ''})
class AuthorizedNavComponent {}

@Component({selector: 'app-page-content', template: ''})
class PageContentComponent { }

@Component({selector: 'app-authorized-footer', template: ''})
class AuthorizedFoooterComponent {}

describe('AuthorizedLayoutComponent', () => {
  let component: AuthorizedLayoutComponent;
  let fixture: ComponentFixture<AuthorizedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AuthorizedLayoutComponent, 
        AuthorizedFoooterComponent,
        AuthorizedNavComponent,
        PageContentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
