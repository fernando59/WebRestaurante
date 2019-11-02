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
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { FormulariopersonaComponent } from './components/personas/formulariopersona/formulariopersona/formulariopersona.component';
import { PersonasComponent } from './components/personas/personas/personas.component';
import { TablapersonaComponent } from './components/personas/tablapersona/tablapersona/tablapersona.component';
import { EditarmesaComponent } from './components/mesas/editarmesa/editarmesa.component';
import { MesaService } from './services/mesa/mesa.service';
import { CrearpedidoComponent } from './components/pedido/crearpedido/crearpedido.component';
import { ModalmesaComponent } from './components/mesas/modalmesa/modalmesa.component';
import { UsuarioService } from './services/usuario/usuario.service';
import { EditarpersonaComponent } from './components/personas/editarpersona/editarpersona.component';
import { CrearUsuarioComponent } from './components/usuarios/crear-usuario/crear-usuario.component';
import { BebidasComponent } from './components/productos/bebidas/bebidas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PlatosComponent } from './components/productos/platos/platos.component';

import { UMedidadComponent } from './components/productos/umedidad/umedidad.component';
import { TablabebidasComponent } from './components/productos/bebidas/tablabebidas/tablabebidas.component';
import { BebidaService } from './services/bebida/bebida.service';
import { CrearbebidaComponent } from './components/productos/bebidas/crearbebida/crearbebida.component';


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
    FormulariopersonaComponent,
    EditarmesaComponent,
    CrearpedidoComponent,
    ModalmesaComponent,
    EditarpersonaComponent,
    CrearUsuarioComponent,
    PedidosComponent,
    BebidasComponent,
    ProductosComponent,
    PlatosComponent,
    UMedidadComponent,
    TablabebidasComponent,
    CrearbebidaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  
    
  ],
  providers: [appRoutingProviders,MesaService,UsuarioService,BebidaService],
  bootstrap: [AppComponent],
  entryComponents:[CrearmesaComponent,
                  FormulariopersonaComponent,
                  EditarmesaComponent,
                  ModalmesaComponent,
                  EditarpersonaComponent,
                  CrearUsuarioComponent,
                CrearbebidaComponent]
})
export class AppModule { }
