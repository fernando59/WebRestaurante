//importo los modulos de router
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './components/inicio/inicio.component'
import { PedidosComponent } from './components/pedidos/pedidos.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component'
import { MesasComponent } from './components/mesas/mesas/mesas.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { PersonasComponent } from './components/personas/personas/personas.component';
import { CrearpedidoComponent } from './components/pedido/crearpedido/crearpedido.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BebidasComponent } from './components/productos/bebidas/bebidas.component';
import { PlatosComponent } from './components/productos/platos/platos.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservaChildComponent } from './components/reservas/reserva-child/reserva-child.component';
import { CrearReservaComponent } from './components/reservas/crear-reserva/crear-reserva.component';
import { ImprimirComponent } from './components/imprimir/imprimir.component'
import { FacturaComponent } from './components/factura/factura.component'
import { TablaComponent } from './components/pedido/tabla/tabla.component';
import { LoginComponent } from './auth/login/login.component'
import { TablareservasComponent } from './components/reservas/tablareservas/tablareservas.component'
import { LinegraficoComponent } from './components/inicio/linegrafico/linegrafico.component';
import { LingraficoComponent } from './components/inicio/lingrafico/lingrafico.component';


const appRoutes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'inicio', component: InicioComponent, children: [
            {
                path: 'graficos', component: LinegraficoComponent, children: [
                    { path: 'line', component: LingraficoComponent }
                ]
            }
            , {
                path: 'pedidos', component: PedidosComponent
                , children: [
                    { path: '', component: PedidoComponent },
                    { path: 'mesas', component: MesasComponent },
                    { path: 'pedido', component: PedidoComponent },
                    { path: 'crear', component: CrearpedidoComponent },
                    { path: 'crear/:codigo', component: CrearpedidoComponent },
                    { path: 'nuevo', component: CrearpedidoComponent },
                    { path: 'factura/:codigo', component: FacturaComponent },
                    { path: 'tabla', component: TablaComponent }

                ]
            },
            {
                path: 'usuarios', component: UsuariosComponent,
                children: [
                    { path: 'persona', component: PersonasComponent }
                ]
            },
            {
                path: 'productos', component: ProductosComponent,
                children: [{ path: 'bebidas', component: BebidasComponent },
                { path: 'platos', component: PlatosComponent },
                ]
            },
            {
                path: 'reservas', component: ReservasComponent,
                children: [{ path: 'crearReserva', component: CrearReservaComponent },
                { path: 'listarReserva', component: ReservaChildComponent },
                { path: 'tabla', component: TablareservasComponent }]
            }
        ]
    },

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);