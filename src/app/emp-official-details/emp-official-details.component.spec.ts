import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOfficialDetailsComponent } from './emp-official-details.component';

describe('EmpOfficialDetailsComponent', () => {
  let component: EmpOfficialDetailsComponent;
  let fixture: ComponentFixture<EmpOfficialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpOfficialDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpOfficialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
