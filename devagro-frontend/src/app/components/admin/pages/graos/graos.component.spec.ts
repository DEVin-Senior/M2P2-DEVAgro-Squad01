import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraosComponent } from './graos.component';

describe('GraosComponent', () => {
  let component: GraosComponent;
  let fixture: ComponentFixture<GraosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
