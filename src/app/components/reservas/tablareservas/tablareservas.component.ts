import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tablareservas',
  templateUrl: './tablareservas.component.html',
  styleUrls: ['./tablareservas.component.css']
})
export class TablareservasComponent implements OnInit {

  constructor(
    public _serviceReserva:ReservaService
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
}
