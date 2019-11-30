//importo los modulos de router
import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
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


const appRoutes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',loadChildren:'./auth/auth.module#AuthModule'},
    {path:'',component:InicioComponent},
    {path:'pedidos',component:PedidosComponent
,children:[
    {path:'',component:PedidoComponent},
    {path:'mesas',component:MesasComponent},
    {path:'pedido',component:PedidoComponent},
     {path:'crear',component:CrearpedidoComponent},
    {path:'nuevo',component:CrearpedidoComponent}
    
]},
    {path:'usuarios',component:UsuariosComponent,
children:[
    {path:'persona',component:PersonasComponent}
]},
  {path:'productos',component:ProductosComponent,
  children:[{path:'bebidas',component:BebidasComponent},
            {path:'platos',component:PlatosComponent},
            ]},
    {path:'reservas',component:ReservasComponent,
children:[{path:'crearReserva',component:CrearReservaComponent},
            {path:'listarReserva',component:ReservaChildComponent}]}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);