//importo los modulos de router
import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { InicioComponent } from './components/inicio/inicio.component'
import { PedidosComponent } from './components/pedidos/pedidos.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component'

const appRoutes:Routes=[
    {path:'',component:InicioComponent},
    {path:'pedidos',component:PedidosComponent},
    {path:'usuarios',component:UsuariosComponent}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);