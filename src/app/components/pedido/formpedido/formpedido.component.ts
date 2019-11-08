import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-formpedido',
  templateUrl: './formpedido.component.html',
  styleUrls: ['./formpedido.component.css']
})
export class FormpedidoComponent implements OnInit,OnChanges {

  constructor() { }

  
  @Input() producto:{};
  public productos:any[]=[];
  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges)
  {
    
    this.productos.push(this.producto)
    console.log(this.productos)
     }

}
