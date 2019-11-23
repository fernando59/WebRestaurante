import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-formpedido',
  templateUrl: './formpedido.component.html',
  styleUrls: ['./formpedido.component.css']
})
export class FormpedidoComponent implements OnInit,OnChanges {

  constructor() { }
  public precio:any[]=[];
  
  @Input() producto:Producto;



  public suma:number=0;
  ngOnInit() {
    this.sumar();
  }

  ngOnChanges(changes:SimpleChanges)
  {
   
   // this.precio.push(new Producto(this.producto));
    
    console.log(this.precio)
    this.sumar();
    }
    sumar()
    {
      this.suma+=parseInt(this.producto.precio.toString());
      /*this.suma=0;
      for(let i=0; i<this.precio.length; i++)
      {
        
        this.suma+=parseInt( this.precio[i]);
        
      }*/
    }

}
