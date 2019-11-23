import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit {
  buscar:string;

  constructor(
    public dialobox:MatDialogRef<ModalClienteComponent>,
    private _servicePersona:PersonaService
  ) { }
  listaPersonas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','nombre','apellido','telefono','direccion','carnet']
  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  ngOnInit() {
    this.refrescarTabla();
  }
  refrescarTabla()
  {
    this._servicePersona.getCliente().subscribe(res=>{
      console.log(res.data)
      this.listaPersonas=new MatTableDataSource(res.data);
      this.listaPersonas.sort=this.sort;
      this.listaPersonas.paginator=this.paginator;
    },
    error=>{
      console.log(error);
    }
    )
  }
  onClose()
  {
    this.dialobox.close();
  }
  onClear()
  {
    this.buscar="";
    this.filtrar();
  }
  filtrar()
  {
    this.listaPersonas.filter=this.buscar.trim().toLowerCase();
  }
  selectRow(row) {

    this.dialobox.close(row);
  
}
}
