import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendasComponent } from './fazendas.component';

describe('FazendasComponent', () => {
  let component: FazendasComponent;
  let fixture: ComponentFixture<FazendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
