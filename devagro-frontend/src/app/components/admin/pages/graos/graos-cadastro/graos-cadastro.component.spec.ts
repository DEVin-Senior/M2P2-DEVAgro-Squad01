import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraosCadastroComponent } from './graos-cadastro.component';

describe('GraosCadastroComponent', () => {
  let component: GraosCadastroComponent;
  let fixture: ComponentFixture<GraosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
