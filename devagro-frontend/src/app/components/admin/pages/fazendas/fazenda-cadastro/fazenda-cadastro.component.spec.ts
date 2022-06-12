import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaCadastroComponent } from './fazenda-cadastro.component';

describe('FazendaCadastroComponent', () => {
  let component: FazendaCadastroComponent;
  let fixture: ComponentFixture<FazendaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazendaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
