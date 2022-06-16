import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rotas
import { AdminRoutingModule } from './admin-routing.module';

// Páginas
import { HomeComponent } from './pages/home/home.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { FazendasComponent } from './pages/fazendas/fazendas.component';
import { GraosComponent } from './pages/graos/graos.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TemplateBodyComponent } from '../template-body/template-body.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FazendaCadastroComponent } from './pages/fazendas/fazenda-cadastro/fazenda-cadastro.component';
import { GraoCadastroComponent } from './pages/grao-cadastro/grao-cadastro.component';
import { FuncionarioCadastroComponent } from './pages/funcionarios/funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioAlteraCadastroComponent } from './pages/funcionarios/funcionario-altera-cadastro/funcionario-altera-cadastro.component';


@NgModule({
  declarations: [
    HomeComponent,
    FuncionariosComponent,
    FazendasComponent,
    GraosComponent,
    SidenavComponent,
    TemplateBodyComponent,
    DashboardComponent,
    FazendaCadastroComponent,
    FuncionarioCadastroComponent,
    FuncionarioAlteraCadastroComponent,
    GraoCadastroComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ]
})
export class AdminModule { }
