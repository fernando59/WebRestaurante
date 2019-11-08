import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges , EventEmitter, Output} from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';

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
    public bebidaslist:any;
     @Output() producto =new EventEmitter<Number>();
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
  onAdd(producto){
    this.producto.emit(producto);
    
  }
}
