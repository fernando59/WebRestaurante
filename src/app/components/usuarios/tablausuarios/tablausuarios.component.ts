import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tablausuarios',
  templateUrl: './tablausuarios.component.html',
  styleUrls: ['./tablausuarios.component.css']
})
export class TablausuariosComponent implements OnInit {

  constructor() { }
  //lista de los usuarios
  listaUsuarios:MatTableDataSource<any>;
  //displayedColumns:string[]=['Nombre']
  ngOnInit() {
  }

}
