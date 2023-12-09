import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfirstValueFromComponent } from './ffirst-value-from.component';

describe('FfirstValueFromComponent', () => {
  let component: FfirstValueFromComponent;
  let fixture: ComponentFixture<FfirstValueFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfirstValueFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfirstValueFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
