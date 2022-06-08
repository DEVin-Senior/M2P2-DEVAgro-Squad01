import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Páginas
import { HomeComponent } from './pages/home/home.component';
import { FazendasComponent } from './pages/fazendas/fazendas.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { GraosComponent } from './pages/graos/graos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '/fazendas',
    component: FazendasComponent,
  },
  {
    path: '/funcionarios',
    component: FuncionariosComponent,
  },
  {
    path: '/graos',
    component: GraosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
