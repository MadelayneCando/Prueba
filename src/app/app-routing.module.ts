import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  {path: 'quienessomos', component: QuienessomosComponent},
  {path: 'rutas', component: RutasComponent},  
  {path: 'ruta/:id', component: RutaComponent},
  {path: 'search/:dato', component: BuscarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'quienessomos'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
