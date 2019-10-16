import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crearmesa',
  templateUrl: './crearmesa.component.html',
  styleUrls: ['./crearmesa.component.css'],
  providers:[MesaService]
})
export class CrearmesaComponent implements OnInit {

  constructor(
    public dialobox:MatDialogRef<CrearmesaComponent>,
    private _serviceMesa:MesaService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!= null)
      form.reset();

    this._serviceMesa.mesaList={
      id:0,
      nombre:'',
      estado:0,
      capacidad:0

    }

  }

  onSubmit(form:NgForm)
  {
    this._serviceMesa.createMesas(form.value).subscribe(res=>
      
      {
        //this.resetForm();

        this.snackbar.open('Agregado correctamente','',{
          duration:3000,
          verticalPosition:'top'
        })
       
      })
    console.log(form.value)
  }

}
