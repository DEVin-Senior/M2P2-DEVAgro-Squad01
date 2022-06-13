import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioAlteraCadastroComponent } from './funcionario-altera-cadastro.component';

describe('FuncionarioAlteraCadastroComponent', () => {
  let component: FuncionarioAlteraCadastroComponent;
  let fixture: ComponentFixture<FuncionarioAlteraCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioAlteraCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioAlteraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
