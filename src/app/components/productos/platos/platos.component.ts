import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CrearplatoComponent } from './crearplato/crearplato.component';
import { CrearumedidaComponent } from '../umedida/crearumedida/crearumedida.component';
import { ExporterService } from 'src/app/services/exporter/exporter.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']

})
export class PlatosComponent implements OnInit {

  constructor(
    private dialog:MatDialog,
    private exports:ExporterService
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
  onOpen()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='560px';
    dialog.width='900px';
    dialog.disableClose=true;
    this.dialog.open(CrearumedidaComponent,dialog);
  }

}
