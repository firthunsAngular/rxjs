import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctComponent } from './distinct.component';

describe('DistinctComponent', () => {
  let component: DistinctComponent;
  let fixture: ComponentFixture<DistinctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
