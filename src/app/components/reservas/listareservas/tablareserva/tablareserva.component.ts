import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tablareserva',
  templateUrl: './tablareserva.component.html',
  styleUrls: ['./tablareserva.component.css']
})
export class TablareservaComponent implements OnInit {

  constructor() { }
  listaBebidas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','fecha','hora','nombre','estado','numero_personas','Opciones']
  ngOnInit() {
  }

}
