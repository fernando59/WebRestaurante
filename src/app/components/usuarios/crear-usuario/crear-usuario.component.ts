import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators,ReactiveFormsModule, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import {  MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[UsuarioService]
})
export class CrearUsuarioComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data:any,
    private _serviceUsuario:UsuarioService,
    private snackbar:MatSnackBar
  ) {
   }


  ngOnInit() {
    this._serviceUsuario.form.get('codigo').setValue(this.data);
   //this._serviceUsuario.form['codigo'].setValue(this.data);

    console.log(this._serviceUsuario.form['codigo'])
  
  }
  resetForm(form?:NgForm)
  {
    if(form!= null)
      form.reset();

    this._serviceUsuario.usuarioList={
      codigo:null,
      usuario:null,
     password:'',
      codigo_usuario:null,
      email:null,
      estado:null
       }

    }

  onSubmit(form:NgForm)
  {
    
    this._serviceUsuario.insertUsuario(form.value).subscribe(res=>
      
      {
        //this.resetForm();

        this.snackbar.open('Agregado correctamente','',{
          duration:3000,
          verticalPosition:'top'
        })
       //resetear el formualrio
    
      })
    console.log(form.value)
  }
}
