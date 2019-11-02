import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import {Mesa} from '../../../models/mesa'
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarmesaComponent } from '../editarmesa/editarmesa.component';
import { MatDialogConfig, MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-tablamesas',
  templateUrl: './tablamesas.component.html',
  styleUrls: ['./tablamesas.component.css'],
})
export class TablamesasComponent implements OnInit {

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
      
    },
    error=>{
      console.log(error);
    }
    )
  }

  onDelete(id:Number)
  {
    if(confirm('Esta seguro  de eliminar'))
    {
      this._serviceMesa.deleteMesas(id).subscribe(res=>{
        console.log('eliminado');
        this.snackbar.open('Eliminado','Hecho',{
             duration:3000,
             verticalPosition:'top',
             
        })
        this.refrescarTabla();
      })
    }

} 
onEdit(mesa:Mesa)
{
 
  const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    this._serviceMesa.mesaList=mesa;
    this.dialog.open(EditarmesaComponent,{data:mesa});
}



}
