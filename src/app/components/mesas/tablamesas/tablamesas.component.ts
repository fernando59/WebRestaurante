import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import {Mesa} from '../../../models/mesa'
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarmesaComponent } from '../editarmesa/editarmesa.component';
import { MatDialogConfig, MatDialog, MAT_DIALOG_DATA,MatDialogRef, MatPaginator, MatSort } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
@Component({
  selector: 'app-tablamesas',
  templateUrl: './tablamesas.component.html',
  styleUrls: ['./tablamesas.component.css'],
})
export class TablamesasComponent implements OnInit {
  buscar:string;
  constructor(
    private  _serviceMesa:MesaService,
    //mensaje 
    private snackbar:MatSnackBar,
    private dialog:MatDialog
  ) { }
  listaMesas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','nombre','estado','capacidad','Opciones']
  ngOnInit() {
    this.refrescarTabla();
  }
  refrescarTabla()
  {
    this._serviceMesa.getMesas().subscribe(res=>{
      this.listaMesas=new MatTableDataSource(res.data);
      this.listaMesas.sort=this.sort;
      this.listaMesas.paginator=this.paginator;
    },
    error=>{
      console.log(error);
    }
    )
  }
  @ViewChild(MatSort,{static:false}) sort:MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator;
  onDelete(codigo)
  {
    this.dialog.open(DialogComponent,{
      disableClose: true,

      data:{
        codigo:codigo,
        message:'¿Esta seguro que desea eliminar la mesa?'
      }}).afterClosed().subscribe(res=>{
        if(res)
        {
          this._serviceMesa.deleteMesas(codigo).subscribe(res=>{
              this.snackbar.open('Eliminado correctamente','Hecho',{
                  duration:3000
              })
          },error=>{
            console.log(error)
          });
        }
     
      });
  }
onEdit(mesa:Mesa)
{
 
  const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    this._serviceMesa.mesaList=mesa;
    this.dialog.open(EditarmesaComponent,{data:mesa}).afterClosed().subscribe(res=>{
      this.refrescarTabla();
    });
}

onClear()
{
  this.buscar="";
  this.filtrar();
}
filtrar()
{
  this.listaMesas.filter=this.buscar.trim().toLowerCase();
}

}
