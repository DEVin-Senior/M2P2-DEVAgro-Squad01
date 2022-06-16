import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoCadastroComponent } from './grao-cadastro.component';

describe('GraoCadastroComponent', () => {
  let component: GraoCadastroComponent;
  let fixture: ComponentFixture<GraoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
