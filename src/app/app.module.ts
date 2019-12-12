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


import { TablabebidasComponent } from './components/productos/bebidas/tablabebidas/tablabebidas.component';
import { BebidaService } from './services/bebida/bebida.service';
import { CrearbebidaComponent } from './components/productos/bebidas/crearbebida/crearbebida.component';
import { EditarbebidasComponent } from './components/productos/bebidas/editarbebidas/editarbebidas.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { TablaplatosComponent } from './components/productos/platos/tablaplatos/tablaplatos.component';
import { CrearplatoComponent } from './components/productos/platos/crearplato/crearplato.component';
import { EditarplatoComponent } from './components/productos/platos/editarplato/editarplato.component';
import { TablamenuComponent } from './components/pedido/tablamenu/tablamenu.component';
import { FormpedidoComponent } from './components/pedido/formpedido/formpedido.component';
import { CrearumedidaComponent } from './components/productos/umedida/crearumedida/crearumedida.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { CrearReservaComponent } from './components/reservas/crear-reserva/crear-reserva.component';
import { ModalClienteComponent } from './components/personas/modal-cliente/modal-cliente.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material';
import { ListareservasComponent } from './components/reservas/listareservas/listareservas.component';
import { ReservaChildComponent } from './components/reservas/reserva-child/reserva-child.component';
import { TablareservaComponent } from './components/reservas/listareservas/tablareserva/tablareserva.component';
import { DetallereservaComponent } from './components/reservas/detallereserva/detallereserva.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { ImprimirComponent } from './components/imprimir/imprimir.component';
import { FacturaComponent } from './components/factura/factura.component';
import { TablaComponent } from './components/pedido/tabla/tabla.component';
import { LoginComponent } from './auth/login/login.component';
import { TablareservasComponent } from './components/reservas/tablareservas/tablareservas.component';
import { LinegraficoComponent } from './components/inicio/linegrafico/linegrafico.component';
import { LingraficoComponent } from './components/inicio/lingrafico/lingrafico.component';


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
    TablabebidasComponent,
    CrearbebidaComponent,
    EditarbebidasComponent,
    DialogComponent,
    TablaplatosComponent,
    EditarplatoComponent,
    CrearplatoComponent,
    TablamenuComponent,
    FormpedidoComponent,
    CrearumedidaComponent,
    ReservasComponent,
    CrearReservaComponent,
    ModalClienteComponent,
    ReservaChildComponent,
    ListareservasComponent,
    TablareservaComponent,
    DetallereservaComponent,
    NotificacionComponent,
    ImprimirComponent,
    FacturaComponent,
    TablaComponent,
    LoginComponent,
    TablareservasComponent,
    LinegraficoComponent,
    LingraficoComponent
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
   
  
    
  ],
  providers: [appRoutingProviders,MesaService,UsuarioService,BebidaService],
  bootstrap: [AppComponent],
  entryComponents:[CrearmesaComponent,
                  FormulariopersonaComponent,
                  EditarmesaComponent,
                  ModalmesaComponent,
                  EditarpersonaComponent,
                  CrearUsuarioComponent,
                CrearbebidaComponent,
                EditarbebidasComponent,
                DialogComponent,
                CrearplatoComponent,
                EditarplatoComponent,
              CrearumedidaComponent,
            ModalClienteComponent,DetallereservaComponent,ImprimirComponent]
})
export class AppModule { }
