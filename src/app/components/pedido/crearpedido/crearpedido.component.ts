import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalmesaComponent } from '../../mesas/modalmesa/modalmesa.component';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crearpedido',
  templateUrl: './crearpedido.component.html',
  styleUrls: ['./crearpedido.component.css']
})
export class CrearpedidoComponent implements OnInit {

  @Input() mesa_nombre:string;
 
  constructor(
    private dialog:MatDialog,
   
  ) { }

    public categoria:string;
    public producto:Producto;
    public codigo:Number
  ngOnInit() {
    
  }




  onDrop(categoria)
  {
    this.categoria=categoria;
  }
  abrirMesa()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    this.dialog.open(ModalmesaComponent,dialog);
  }

  enviarDatos(producto:Producto)
  {
    this.producto=producto;
   
  }
  
  enviarDatos2(producto:Producto)
  {
    this.codigo=producto.codigo;
   
  }
}
