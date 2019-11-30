import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-listareservas',
  templateUrl: './listareservas.component.html',
  styleUrls: ['./listareservas.component.css']
})
export class ListareservasComponent implements OnInit {
  fechas:any;
  fechass:any;
  constructor(
    public _serviceReserva:ReservaService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
  }
  listaReservas:MatTableDataSource<any>
  displayedColumns:string[]=['codigo','fecha','hora','nombre','estado','numero_personas','Opciones']
  onFilter(form:NgForm)
  {
    const momentDate = new Date(form.value.fecha.toString());
    const formattedDate = moment(momentDate).format("YYYY/MM/DD");
    form.value.fecha=formattedDate;
    this._serviceReserva.filtrarFecha(form.value.fecha).subscribe(res=>{
      this.listaReservas=new MatTableDataSource(res.data);
    },error=>{
      this.snackbar.open('No se encotro resultados','Aceptar',{
        duration:3000,
        verticalPosition:'top'
    })
   
    } )  
  }
 }
