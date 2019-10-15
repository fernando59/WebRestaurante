import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import {MaterialModule} from './material.module';
//rutas
import {routing,appRoutingProviders} from './app.routing'
import { InicioComponent } from './components/inicio/inicio.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TablausuariosComponent } from './components/usuarios/tablausuarios/tablausuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PedidosComponent,
    UsuariosComponent,
    TablausuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
