import { Component, OnInit, ViewChild } from '@angular/core';
import { UMedidaService } from 'src/app/services/uMedida/u-medida.service';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSnackBar, MatSort, MatPaginator, MatDialogRef } from '@angular/material';
import { Umedida } from 'src/app/models/uMedida';
import { DialogComponent } from 'src/app/components/dialog/dialog/dialog.component';

@Component({
  selector: 'app-crearumedida',
  templateUrl: './crearumedida.component.html',
  styleUrls: ['./crearumedida.component.css']
})
export class CrearumedidaComponent implements OnInit {

  constructor(
    private _serviceUmedida: UMedidaService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private dialogbox:MatDialogRef<CrearumedidaComponent>,
  ) { }
  buscar: string;
  listaMedida: MatTableDataSource<any>
  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'Opciones']
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngOnInit() {
    this.refrescarTabla();
  }
  estado: boolean = true;
  nombre: string = 'Crear';
  refrescarTabla() {
    this._serviceUmedida.getUmedida().subscribe(res => {
      console.log(res.data)
      this.listaMedida = new MatTableDataSource(res.data);
      this.listaMedida.sort = this.sort;
      this.listaMedida.paginator = this.paginator;
      console.log(res.data)
    },
      error => {
        console.log(error);
      }
    )
  }
  onSubmit(form: NgForm, formDirective: FormGroupDirective) {
    if (this.estado) {
      this._serviceUmedida.insertUmedida(form.value).subscribe(res => {
        this.snackbar.open('Creado correctamente', 'Aceptar', {
          duration: 3000,
          verticalPosition: 'top'
        })
        formDirective.resetForm();
        this._serviceUmedida.form.reset();
        this.estado = false;
        this.nombre = 'Crear';
      }, error => {
        console.log(error)
      })
      console.log(form.value)
    } else {

      this._serviceUmedida.updateUmedida(form.value).subscribe(res => {
        formDirective.resetForm();
        this.snackbar.open('Editado correctamente', 'Aceptar', {
          duration: 3000,
          verticalPosition: 'top'
        })
    
        this._serviceUmedida.form.reset();
        this.estado = true;
        this.nombre = 'Crear';
        
      }, error => {
        console.log(error)
      })

    }

  }
  onEdit(form: Umedida) {
    this.estado = false;
    console.log(this.estado)
    this.nombre = 'Editar';
    console.log(form)
    this._serviceUmedida.form.setValue(form);
  }
  onDelete(codigo)
  {
    this.dialog.open(DialogComponent,{
      disableClose: true,

      data:{
        codigo:codigo,
        message:'¿Esta seguro que desea eliminar la unidad de medida?'
      }}).afterClosed().subscribe(res=>{
        if(res)
        {
          this._serviceUmedida.deleteUmedida(codigo).subscribe(res=>{
              this.snackbar.open('Eliminado correctamente','Hecho',{
                  duration:3000
              })
          },error=>{
            console.log(error)
          });
        }
     
      });
}
  onClose()
  {
    this.dialogbox.close()
  }

}
