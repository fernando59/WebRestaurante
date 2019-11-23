import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalClienteComponent } from '../personas/modal-cliente/modal-cliente.component';
import { ReservaService } from 'src/app/services/reserva/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor(
    private _serviceMesa:MesaService,
    private _serviceReserva:ReservaService
  ) { }
    listamesas:any;
  ngOnInit() {
   this._serviceMesa.getMesas().subscribe(res=>{
     this.listamesas=res.data;
     console.log(this.listamesas)
   })
  }

}
