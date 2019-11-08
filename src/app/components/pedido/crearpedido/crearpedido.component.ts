import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalmesaComponent } from '../../mesas/modalmesa/modalmesa.component';

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
    public producto:any;
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

  enviarDatos(producto)
  {
    this.producto=producto;
   
  }
}
