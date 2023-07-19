import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RutaComponent } from './components/ruta/ruta.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienessomosComponent,
    NavbarComponent,
    RutasComponent,
    BuscarComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
