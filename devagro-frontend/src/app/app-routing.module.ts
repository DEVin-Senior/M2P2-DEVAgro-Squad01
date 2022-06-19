import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaCadastroComponent } from './components/admin/pages/fazendas/fazenda-cadastro/fazenda-cadastro.component';
import { FazendasComponent } from './components/admin/pages/fazendas/fazendas.component';
import { FuncionarioAlteraCadastroComponent } from './components/admin/pages/funcionarios/funcionario-altera-cadastro/funcionario-altera-cadastro.component';
import { FuncionarioCadastroComponent } from './components/admin/pages/funcionarios/funcionario-cadastro/funcionario-cadastro.component';
import { FuncionariosComponent } from './components/admin/pages/funcionarios/funcionarios.component';
import { GraosComponent } from './components/admin/pages/graos/graos.component';
import { GraoCadastroComponent } from './components/admin/pages/grao-cadastro/grao-cadastro.component';
import { EmpresaCadastroComponent } from './components/admin/pages/empresa-cadastro/empresa-cadastro.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: "admin/fazendas",
    component: FazendasComponent
  },
  {
    path: "admin/fazendas/cadastro",
    component: FazendaCadastroComponent
  },
  {
    path: "admin/funcionarios",
    component: FuncionariosComponent
  },
  {
    path:"admin/funcionarios/cadastro",
    component:FuncionarioCadastroComponent
  },
  {
    path:"admin/funcionarios/cadastro/alterar",
    component:FuncionarioAlteraCadastroComponent
  },
  {
    path: "admin/graos",
    component: GraosComponent
  },
  {
    path: "admin/grao-cadastro",
    component: GraoCadastroComponent
  },
  {
    path: "admin/empresa-cadastro",
    component: EmpresaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
