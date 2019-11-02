import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CrearbebidaComponent } from './crearbebida/crearbebida.component';

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
    dialog.height='600px'
    this.dialog.open(CrearbebidaComponent,dialog);
  }
}
