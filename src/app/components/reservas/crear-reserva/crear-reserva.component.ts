import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { MatDialogConfig, MatDialog, DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from '@angular/material';
import { ModalClienteComponent } from '../../personas/modal-cliente/modal-cliente.component';
import { AppDateAdapter, APP_DATE_FORMATS } from './picker';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css'],
  providers:[
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class CrearReservaComponent implements OnInit {

  constructor(
    private _serviceMesa:MesaService,
    public _serviceReserva:ReservaService,
    private dialog:MatDialog,
    private snackbar:MatSnackBar
    
  ) { }
    date:Date=new Date();
    settings={
      bigBanner:true,
      timePicker:true,
      format:'dd-MM-yyyy hh:mm a',
      defaultOpen:false,
      closeOnSelect:false
    }

  listamesas:any;
  ngOnInit() {
    this._serviceMesa.getMesas().subscribe(res=>{
      this.listamesas=res.data;
      console.log(this.listamesas)
    })
  }
  onOpen()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='560px';
    dialog.width='900px';
    dialog.disableClose=true;
    this.dialog.open(ModalClienteComponent,dialog).afterClosed().subscribe(res=>{
      this._serviceReserva.form.controls['nombre_cliente'].setValue(res.nombre);
      this._serviceReserva.form.controls['id_cliente'].setValue(res.codigo);
      console.log(res.nombre)
    });
    return false;
  }
  onSubmit(form,select:HTMLInputElement){
    form.value.fecha=form.value.fecha.toString();
    this.snackbar.open('Creado exitosamente','',{
      duration:3000,
      verticalPosition:'top'

  })
    this._serviceReserva.insertReserva(form.value).subscribe(res=>{
      console.log('Aceptado')
    })
    console.log(form.value)
    console.log(select.value)

  }
}
