import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CrearbebidaComponent } from './crearbebida/crearbebida.component';
import { CrearumedidaComponent } from '../umedida/crearumedida/crearumedida.component';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }
  onCreate()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='560px'
    this.dialog.open(CrearbebidaComponent,dialog);
  }
  onOpen()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='560px';
    dialog.width='900px';
    this.dialog.open(CrearumedidaComponent,dialog);
  }
}
