import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { Producto } from 'src/app/models/producto';
import { EditarbebidasComponent } from '../editarbebidas/editarbebidas.component';
import { DialogComponent } from 'src/app/components/dialog/dialog/dialog.component';

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
  displayedColumns:string[]=['codigo','nombre','descripcion','precio','sw_stock','unidad_de_medida','Opciones']

  //variable para sort y paginator
  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  ngOnInit() {
     this.refrescarTabla();
  }
 refrescarTabla()
  {
    this._serviceBebida.getBebida().subscribe(res=>{

      this.listaBebidas=new MatTableDataSource(res.data);
      this.listaBebidas.sort=this.sort;
      this.listaBebidas.paginator=this.paginator;
      console.log(res.data)
    },
    error=>{
      console.log(error);
    }
    )
  }
  onEdit(bebida:Producto)
  {
    this.dialog.open(EditarbebidasComponent,{data:bebida }).afterClosed().subscribe(res=>{
      this.refrescarTabla();
    });
  }
  onDelete(codigo)
  {
    this.dialog.open(DialogComponent,{
      disableClose: true,

      data:{
        codigo:codigo,
        message:'¿Esta seguro que desea eliminar la bebida?'
      }}).afterClosed().subscribe(res=>{
        if(res)
        {
          this._serviceBebida.deleteBebida(codigo).subscribe(res=>{
              this.snackbar.open('Eliminado correctamente','Hecho',{
                  duration:3000
              })
          },error=>{
            console.log(error)
          });
        }
     
      });
  }
  onClear()
   {
     this.buscar="";
     this.filtrar();
   }
   filtrar()
   {
     this.listaBebidas.filter=this.buscar.trim().toLowerCase();
   }
}
