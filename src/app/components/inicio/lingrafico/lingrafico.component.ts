import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { FacturaService } from 'src/app/services/factura/factura.service';
@Component({
  selector: 'app-lingrafico',
  templateUrl: './lingrafico.component.html',
  styleUrls: ['./lingrafico.component.css']
})
export class LingraficoComponent implements OnInit {

  constructor(
    public _serviceFactura:FacturaService
  ) { }
chart=[]
  ngOnInit() {
    this.iniciar()
  }
  iniciar()
  {
    this._serviceFactura.mostrarTotal().subscribe(res=>{
      console.log(res.data)
  
    })
  
  }
}
