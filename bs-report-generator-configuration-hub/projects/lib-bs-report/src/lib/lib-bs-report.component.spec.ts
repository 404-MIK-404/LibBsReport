import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBsReportComponent } from './lib-bs-report.component';

describe('LibBsReportComponent', () => {
  let component: LibBsReportComponent;
  let fixture: ComponentFixture<LibBsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibBsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
