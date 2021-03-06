import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges , EventEmitter, Output} from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { Producto } from 'src/app/models/producto';
import { IncrementarService } from 'src/app/services/incrementar/incrementar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tablamenu',
  templateUrl: './tablamenu.component.html',
  styleUrls: ['./tablamenu.component.css']
})
export class TablamenuComponent implements OnInit, OnChanges {

  constructor(
    private _serviceProductos:BebidaService,
    public _serviceIncrementar:IncrementarService,
    private rutaActiva: ActivatedRoute,
  ) { }
    bebida:any;
    @Input()  categoria:string;
    public bebidaslist:Producto;
    estado:boolean=true
  ngOnInit() {
   
  
  }
  ngOnChanges(changes:SimpleChanges)
  {
    if(this.categoria=='gaseosas' || this.categoria=='refrescos')
    {
      this.categoriaTable();

    }else if(this.categoria=='sushis' || this.categoria=='fideos')
    {
      this.productosTable();
    }
  }
  categoriaTable()
  {
    this._serviceProductos.getBebida().subscribe(res=>{
      this.bebida=res.data;
      if(this.categoria=='refrescos')
      {
        this.bebidaslist=this.bebida.filter(resa=> resa.id_tipo_producto==1)
      }else 
      {
        this.bebidaslist=this.bebida.filter(resa=> resa.id_tipo_producto==2)
      }

    })
  }
  productosTable()
  {
    this._serviceProductos.getPlato().subscribe(res=>{
      this.bebida=res.data;
       if(this.categoria=='fideos')
       {
         this.bebidaslist=this.bebida.filter(resa=> resa.id_tipo_producto==3)
       }else if(this.categoria=='sushis')
       {
         this.bebidaslist=this.bebida.filter(resa=> resa.id_tipo_producto==5)
       }
    })
  }
  onAdd(producto:Producto){
    if(this.rutaActiva.snapshot.params.codigo!=null){
      this.estado=false;
    }
    
  
    this._serviceIncrementar.sumar(parseInt( producto.codigo.toString()),parseInt( producto.precio.toString()),this.estado)
  
  }
  onRest(producto:Producto){
    if(this.rutaActiva.snapshot.params.codigo!=null){
      this.estado=false;
    }
    this._serviceIncrementar.restar(parseInt( producto.codigo.toString()),parseInt( producto.precio.toString()),this.estado)

  
  }
}
