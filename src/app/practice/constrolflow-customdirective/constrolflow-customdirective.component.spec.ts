import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrolflowCustomdirectiveComponent } from './constrolflow-customdirective.component';

describe('ConstrolflowCustomdirectiveComponent', () => {
  let component: ConstrolflowCustomdirectiveComponent;
  let fixture: ComponentFixture<ConstrolflowCustomdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstrolflowCustomdirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstrolflowCustomdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
