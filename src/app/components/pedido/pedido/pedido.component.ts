import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa } from 'src/app/models/mesa';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalmesaComponent } from '../../mesas/modalmesa/modalmesa.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(
    private _serviceMesa: MesaService,
    private dialog:MatDialog
  ) { }
  public mesas: Mesa[]
  ngOnInit() {
    this.getMesas();
  }

  getMesas() {
    this._serviceMesa.getMesas().subscribe(res => {
      this.mesas = res.data
    })
  }
  abrirMesa(mesa:Mesa)
  {

 
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.width='50%';
    dialog.disableClose=true;
    this.dialog.open(ModalmesaComponent,{data:mesa});
  }
}
