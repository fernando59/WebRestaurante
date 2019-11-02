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
import { UMedidaComponent } from './componentes/productos/u-medida/u-medida.component';
import { UMedidadComponent } from './components/productos/umedidad/umedidad.component';

const appRoutes:Routes=[
    {path:'',component:InicioComponent},
    {path:'pedidos',component:PedidosComponent
,children:[
    {path:'',component:PedidoComponent},
    {path:'mesas',component:MesasComponent},
    {path:'pedido',component:PedidoComponent},
    {path:'nuevo',component:CrearpedidoComponent}
    
]},
    {path:'usuarios',component:UsuariosComponent,
children:[
    {path:'persona',component:PersonasComponent}
]},
  {path:'productos',component:ProductosComponent,
  children:[{path:'bebidas',component:BebidasComponent},
            {path:'platos',component:PlatosComponent},
            {path:'unidadMedida',component:UMedidadComponent}]}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);