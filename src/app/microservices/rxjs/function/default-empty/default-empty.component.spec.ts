import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEmptyComponent } from './default-empty.component';

describe('DefaultEmptyComponent', () => {
  let component: DefaultEmptyComponent;
  let fixture: ComponentFixture<DefaultEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
