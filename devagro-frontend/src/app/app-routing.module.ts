import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendasComponent } from './components/admin/pages/fazendas/fazendas.component';
import { FuncionariosComponent } from './components/admin/pages/funcionarios/funcionarios.component';
import { GraosComponent } from './components/admin/pages/graos/graos.component';
import { GraoCadastroComponent } from './components/admin/pages/grao-cadastro/grao-cadastro.component';


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
    path: "admin/funcionarios",
    component: FuncionariosComponent
  },
  {
    path: "admin/graos",
    component: GraosComponent
  },
  {
    path: "admin/grao-cadastro",
    component: GraoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
