import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges , EventEmitter, Output} from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-tablamenu',
  templateUrl: './tablamenu.component.html',
  styleUrls: ['./tablamenu.component.css']
})
export class TablamenuComponent implements OnInit, OnChanges {

  constructor(
    private _serviceProductos:BebidaService
  ) { }

    @Input()  categoria:string;
    public bebidaslist:Producto;
     @Output() producto =new EventEmitter<Producto>();
  ngOnInit() {
   
  
  }
  ngOnChanges(changes:SimpleChanges)
  {
    if(this.categoria=='gaseosas')
    {
      this.categoriaTable();

    }
  }
  categoriaTable()
  {
    this._serviceProductos.getBebida().subscribe(res=>{
      this.bebidaslist=res.data;
      console.log(this.bebidaslist)
    })
  }
  onAdd(producto:Producto){
    this.producto.emit(producto);
    console.log('e')
  }
}
