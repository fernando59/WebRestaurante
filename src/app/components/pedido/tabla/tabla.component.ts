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
    todo:any
  ngOnInit() {
    this.mostrar()
  }
  mostrar()
  {
    this._servicePedido.obtenerTodo().subscribe(res=>
      {
        this.todo=res.data
        console.log(this.todo)
      })
  }
}
