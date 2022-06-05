import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rotas
import { AdminRoutingModule } from './admin-routing.module';

// Páginas
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
