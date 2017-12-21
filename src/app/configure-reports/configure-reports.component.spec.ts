import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureReportsComponent } from './configure-reports.component';

describe('ConfigureReportsComponent', () => {
  let component: ConfigureReportsComponent;
  let fixture: ComponentFixture<ConfigureReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
