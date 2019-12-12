import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog/dialog.component';

@Component({
  selector: 'app-tablareservas',
  templateUrl: './tablareservas.component.html',
  styleUrls: ['./tablareservas.component.css']
})
export class TablareservasComponent implements OnInit {

  constructor(
    public _serviceReserva:ReservaService,
    private dialog:MatDialog,
  ) { }

  ngOnInit() {
    this.mostrar()
  }
  reservas:any

  mostrar()
  {
    this._serviceReserva.filtrarFecha(formatDate(new Date(), 'yyyy/MM/dd', 'en')).subscribe(res=>{
      this.reservas=res.data
     this.reservas=this.reservas.filter(r=> r.estado=='PENDIENTE')
     console.log(this.reservas)
     
    })
  }
  cambiarEstado(codigo)
  {
    this.dialog.open(DialogComponent,{
      disableClose: true,

      data:{
        codigo:1,
        message:'¿Esta seguro que desea finalizar la reserva?'
      }}).afterClosed().subscribe(res=>{
        if(res)
        {
          let enviar={codigo:codigo,estado:'FINALIZADO'}
          this._serviceReserva.editarEstadoReserva(enviar).subscribe(res=>{
            console.log('editado correctamente')
            this.mostrar()
          })
        }
     
      });

  
  }
}
