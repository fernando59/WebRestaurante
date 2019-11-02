import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css']
})
export class FormulariopersonaComponent implements OnInit {

  constructor(
    public dialobox:MatDialogRef<FormulariopersonaComponent>,
    private _personaService:PersonaService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!= null)
      form.reset();

    this._personaService.personalist={
      codigo:0,
      nombre:'',
      apellido:'',
      edad:0,
      telefono:'',
      direccion:'',
      carnet:''
  
    }

  }
  onClose()
  {
    this.dialobox.close();
  //  this._personaService.filter('Register succesfull');
  }
  onSubmit(form:NgForm)
  {
    this._personaService.insertPersona(form.value).subscribe(res=>
      
      {
        this.resetForm();

        this.snackbar.open('Agregado correctamente','',{
          duration:3000,
          verticalPosition:'top'
        })
        console.log(res)
      },
      error=>{
        console.log(error)
      }
      
      
      )
    console.log(form.value)
  }

}
