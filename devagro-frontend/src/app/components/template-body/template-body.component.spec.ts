import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBodyComponent } from './template-body.component';

describe('TemplateBodyComponent', () => {
  let component: TemplateBodyComponent;
  let fixture: ComponentFixture<TemplateBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
