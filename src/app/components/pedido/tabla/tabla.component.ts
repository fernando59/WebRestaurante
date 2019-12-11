import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(
    public _servicePedido: PedidoService,
  ) { }
    todo:any=[]
    producto:any=[]
    unidos:any
  ngOnInit() {
    this.mostrar()
  }
  mostrar()
  {
    this._servicePedido.obtenerTodo().subscribe(res=>
      {
        this.todo=res.data
        console.log(this.todo)
        this.todo.map(t=>{
          this._servicePedido.obtenerProducto(t.codigo_pedido).subscribe(mesa=>{
            this.producto.push(mesa.data)
            console.log(this.producto)
            //this.unidos={pedido:t.codigo_pedido};
            //this.producto=this.producto.concat({pedido:t.codigo_pedido});
            //let a=Object.assign(this.unidos,this.producto)
          })
        })
     
        
        
      })
    
  }
}
