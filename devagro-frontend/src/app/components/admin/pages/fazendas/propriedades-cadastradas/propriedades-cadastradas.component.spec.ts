import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadesCadastradasComponent } from './propriedades-cadastradas.component';

describe('PropriedadesCadastradasComponent', () => {
  let component: PropriedadesCadastradasComponent;
  let fixture: ComponentFixture<PropriedadesCadastradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriedadesCadastradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadesCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
