import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastValueFromComponent } from './last-value-from.component';

describe('LastValueFromComponent', () => {
  let component: LastValueFromComponent;
  let fixture: ComponentFixture<LastValueFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastValueFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastValueFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
