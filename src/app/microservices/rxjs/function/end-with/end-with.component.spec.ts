import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndWithComponent } from './end-with.component';

describe('EndWithComponent', () => {
  let component: EndWithComponent;
  let fixture: ComponentFixture<EndWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndWithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
