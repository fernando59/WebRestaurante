//importo los modulos de router
import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { InicioComponent } from './components/inicio/inicio.component'
import { PedidosComponent } from './components/pedidos/pedidos.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component'
import { MesasComponent } from './components/mesas/mesas/mesas.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { PersonasComponent } from './components/personas/personas/personas.component';

const appRoutes:Routes=[
    {path:'',component:InicioComponent},
    {path:'pedidos',component:PedidosComponent
,children:[
    {path:'',component:PedidoComponent},
    {path:'mesas',component:MesasComponent},
    {path:'pedido',component:PedidoComponent}
]},
    {path:'usuarios',component:UsuariosComponent,
children:[
    {path:'persona',component:PersonasComponent}
]},
  
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);