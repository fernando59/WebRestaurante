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

 
  ngOnInit() {
    this._serviceMesa.form.setValue(this.data);

   }
  onSubmit(form:NgForm)
  {
      this._serviceMesa.updateMesas(form.value).subscribe(res=>{
        this.snackbar.open('Editado correctamente','',{
          duration:3000,
          verticalPosition:'top'
      })
      this.dialobox.close();
       },
       error=>{
         console.log(error)
       }
      )
  }

}
