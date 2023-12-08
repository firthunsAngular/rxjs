import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFramesComponent } from './animation-frames.component';

describe('AnimationFramesComponent', () => {
  let component: AnimationFramesComponent;
  let fixture: ComponentFixture<AnimationFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationFramesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimationFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
