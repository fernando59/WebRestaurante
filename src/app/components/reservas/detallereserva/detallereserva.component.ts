import { Component, OnInit, Inject } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detallereserva',
  templateUrl: './detallereserva.component.html',
  styleUrls: ['./detallereserva.component.css']
})
export class DetallereservaComponent implements OnInit {

  constructor(
    public _serviceReserva:ReservaService,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private snackbar:MatSnackBar,
    public dialobox:MatDialogRef<DetallereservaComponent>,
  ) { }
    detalle:any;
  ngOnInit() {
   
    this.data.map(res=>
      this.detalle=res)
  }
  onClose()
  {
    this.dialobox.close();
 
  }
  onSubmit(form:NgForm)
  {
    form.value.codigo=this.detalle.codigo;
    this._serviceReserva.editarEstadoReserva(form.value).subscribe(res=>
      {
        this.snackbar.open('Creado exitosamente','Hecho',{
          duration:3000,
          verticalPosition:'top'
    
      })
      this.onClose()
      })
    
    
  }
}
