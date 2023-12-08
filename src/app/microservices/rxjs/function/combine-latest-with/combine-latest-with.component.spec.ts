import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestWithComponent } from './combine-latest-with.component';

describe('CombineLatestWithComponent', () => {
  let component: CombineLatestWithComponent;
  let fixture: ComponentFixture<CombineLatestWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestWithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombineLatestWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
