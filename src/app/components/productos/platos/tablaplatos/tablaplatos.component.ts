import { Component, OnInit, ViewChild } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { MatDialog, MatSnackBar, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { EditarplatoComponent } from '../editarplato/editarplato.component';
import { Producto } from 'src/app/models/producto';
import { DialogComponent } from 'src/app/components/dialog/dialog/dialog.component';
import { ExporterService } from 'src/app/services/exporter/exporter.service';

@Component({
  selector: 'app-tablaplatos',
  templateUrl: './tablaplatos.component.html',
  styleUrls: ['./tablaplatos.component.css']
})
export class TablaplatosComponent implements OnInit {

  constructor(
    private _serviceBebida:BebidaService,
    private dialog:MatDialog,
    private snackbar:MatSnackBar,
    private exports:ExporterService
  ) { }
  //variables
  buscar:string;
  listaBebidas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','nombre','descripcion','precio','unidad_de_medida','Opciones']
 
  //variable para sort y paginator
  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  ngOnInit() {
    this.refrescarTabla();
  }
  refrescarTabla()
  {
    this._serviceBebida.getPlato().subscribe(res=>{

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

  onEdit(plato:Producto)
  {
    this.dialog.open(EditarplatoComponent,{data:plato }).afterClosed().subscribe(res=>{
      this.refrescarTabla();
      this._serviceBebida.form2.reset();
    });
  }
  onDelete(codigo)
  {
    this.dialog.open(DialogComponent,{
      disableClose: true,

      data:{
        codigo:codigo,
        message:'¿Esta seguro que desea eliminar el plato?'
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
   exportExcel()
   {
 this.exports.exportToExcel(this.listaBebidas.data,'my_export')
   }
}
