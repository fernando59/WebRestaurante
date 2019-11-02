import { Component, OnInit } from '@angular/core';
import { MesaService } from '../../../services/mesa/mesa.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CrearmesaComponent } from '../crearmesa/crearmesa/crearmesa.component';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css'],
  providers:[MesaService]
})
export class MesasComponent implements OnInit {

  constructor(
    private _serviceMesa:MesaService,
    private dialog:MatDialog,
  ) { }

  ngOnInit() {
   
  }
  onCreate()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    
    this.dialog.open(CrearmesaComponent,dialog);
  }

}
