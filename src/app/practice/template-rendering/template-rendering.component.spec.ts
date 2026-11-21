import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRenderingComponent } from './template-rendering.component';

describe('TemplateRenderingComponent', () => {
  let component: TemplateRenderingComponent;
  let fixture: ComponentFixture<TemplateRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRenderingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
