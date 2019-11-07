import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CrearplatoComponent } from './crearplato/crearplato.component';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

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
    this.dialog.open(CrearplatoComponent,dialog);
  }
}
