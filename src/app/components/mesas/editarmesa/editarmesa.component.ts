import { Component, OnInit, Inject } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-editarmesa',
  templateUrl: './editarmesa.component.html',
  styleUrls: ['./editarmesa.component.css']
})
export class EditarmesaComponent implements OnInit {

  constructor(
   @Inject (MAT_DIALOG_DATA) public data:any,
    private dialobox:MatDialogRef<EditarmesaComponent>,
    private _serviceMesa:MesaService,
    private snackbar:MatSnackBar,
  
  ) { }

  resetForm(form?:NgForm)
  {
    if(form!= null)
      form.reset();

    this._serviceMesa.mesaList={
      codigo:0,
      nombre:'',
      estado:0,
      capacidad:0

    }

  }
  ngOnInit() {
    this._serviceMesa.mesaList=this.data;
    console.log(this._serviceMesa.mesaList)
   }
  onSubmit(form:NgForm)
  {
    console.log(form.value)
      this._serviceMesa.updateMesas(form.value).subscribe(res=>{
        this.snackbar.open('Editado correctamente','',{
          duration:3000,
          verticalPosition:'top'
      })
       },
       error=>{
         console.log(error)
       }
      )
  }

}
