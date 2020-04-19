import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaLayoutComponent } from './pasadena-layout.component';
import { Component } from '@angular/core';

@Component({selector: 'app-pasadena-header', template: ''})
class PasadenaHeaderComponent {}

@Component({selector: 'app-page-content', template: ''})
class PageContentComponent {}

@Component({selector: 'app-pasadena-footer', template: ''})
class PasaddenaFooterComponent {}


describe('PasadenaLayoutComponent', () => {
  let component: PasadenaLayoutComponent;
  let fixture: ComponentFixture<PasadenaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PasadenaLayoutComponent,
        PasadenaHeaderComponent,
        PageContentComponent,
        PasaddenaFooterComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
