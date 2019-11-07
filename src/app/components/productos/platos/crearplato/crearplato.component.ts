import { Component, OnInit } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-crearplato',
  templateUrl: './crearplato.component.html',
  styleUrls: ['./crearplato.component.css']
})
export class CrearplatoComponent implements OnInit {

  constructor(
    private _serviceBebida:BebidaService,
    private snackbar:MatSnackBar
  ) { }
  public  unidadMedidaItems:any;
  ngOnInit() {
    this.drowdownRefresh();
  }

  drowdownRefresh()
  {
    this._serviceBebida.getMedida2().subscribe(res=>{
        this.unidadMedidaItems=res.data;
      
    },error=>{
      console.log(error)
    })
  }
  onSubmit(form:NgForm)
  {
    this._serviceBebida.insertBebida(form.value).subscribe(res=>{
      this.snackbar.open('Creado exitosamente','Hecho',{
        duration:3000,
        verticalPosition:'top'
  
    })
    console.log(form.value)
  })
    }
}
