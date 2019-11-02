import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { BebidaService } from 'src/app/services/bebida/bebida.service';

@Component({
  selector: 'app-tablabebidas',
  templateUrl: './tablabebidas.component.html',
  styleUrls: ['./tablabebidas.component.css']
})
export class TablabebidasComponent implements OnInit {
  
  constructor(
    private _serviceBebida:BebidaService,
    private dialog:MatDialog,
    private snackbar:MatSnackBar
  ) { }

    //buscador
    buscar:string;
  listaBebidas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','nombre','descripcion','precio','sw_stock','tipo_producto','id_unidad_medida','Opciones']

  ngOnInit() {
     this.refrescarTabla();
  }
 refrescarTabla()
  {
    this._serviceBebida.getBebida().subscribe(res=>{

      this.listaBebidas=new MatTableDataSource(res.data);
      //this.listaPersonas.sort=this.sort;
      //this.listaPersonas.paginator=this.paginator;
      console.log(res.data)
    },
    error=>{
      console.log(error);
    }
    )
  }
}
