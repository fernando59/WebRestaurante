import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { MesasComponent } from './components/mesas/mesas/mesas.component';
import { TablamesasComponent } from './components/mesas/tablamesas/tablamesas.component';
import { CrearmesaComponent } from './components/mesas/crearmesa/crearmesa/crearmesa.component';
import { FormsModule } from '@angular/forms';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { FormulariopersonaComponent } from './components/personas/formulariopersona/formulariopersona/formulariopersona.component';
import { PersonasComponent } from './components/personas/personas/personas.component';
import { TablapersonaComponent } from './components/personas/tablapersona/tablapersona/tablapersona.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PedidosComponent,
    UsuariosComponent,
    TablausuariosComponent,
    MesasComponent,
    TablamesasComponent,
    CrearmesaComponent,
    PedidoComponent,
    PersonasComponent,
    TablapersonaComponent,
    FormulariopersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    HttpClientModule,
    FormsModule,
  
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  entryComponents:[CrearmesaComponent,FormulariopersonaComponent]
})
export class AppModule { }
