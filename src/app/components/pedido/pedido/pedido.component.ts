import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa } from 'src/app/models/mesa';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalmesaComponent } from '../../mesas/modalmesa/modalmesa.component';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { IncrementarService } from 'src/app/services/incrementar/incrementar.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(
    private _serviceMesa: MesaService,
    private dialog:MatDialog,
    private router:Router,
    public _servicePedido: PedidoService,
    public _serviceIncrementar:IncrementarService
  ) { }
  public mesas: Mesa[]
  todo:any=[]
  ngOnInit() {
    this.getMesas();
  }

  getMesas() {
    this._serviceMesa.getMesas().subscribe(res => {
   
      this.mesas = res.data
      this.mesas.map(mes=>{
        if(mes.estado.toString()=="B"){
          this._servicePedido.obtenerTodo2(mes.codigo).subscribe(todo=>{
            this.todo.push(todo.data)
            console.log(this.todo)
          })
        }
   
      })
     // this.obtenerTodo(this.mesas)
    })
  }
  obtenerTodo(codigo)
  {
    
  }
  abrirMesa(mesa:Mesa,editar)
  {

 
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.width='50%';
    dialog.disableClose=true;
    this.dialog.open(ModalmesaComponent,{data:{mesa,editar:editar}}).afterClosed().subscribe(res=>
      {
        if(res)
        {
          this.router.navigateByUrl('inicio/pedidos/crear');
        }
      });
  }
  abrirFactura(mesa)
  {
    console.log(mesa)
    this.router.navigateByUrl('inicio/pedidos/factura/'+mesa);
  }
  editar(codigo)
  {
    this.router.navigateByUrl('inicio/pedidos/crear/'+codigo);
  }
}
