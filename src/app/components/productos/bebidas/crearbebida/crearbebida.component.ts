import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { element } from 'protractor';
import { NgForm, FormBuilder } from '@angular/forms';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { MatSnackBar } from '@angular/material';

interface HtmlInputEvent extends Event{
  target:HTMLInputElement & EventTarget
}
@Component({
  selector: 'app-crearbebida',
  templateUrl: './crearbebida.component.html',
  styleUrls: ['./crearbebida.component.css']
})
export class CrearbebidaComponent implements OnInit {



  constructor(
    public _serviceBebida:BebidaService,
    private snackbar:MatSnackBar,private fb: FormBuilder, private cd: ChangeDetectorRef
  ) { }
    //variables
    public  unidadMedidaItems:any;
    file:File=null
    file2:any;
  ngOnInit() {
    this.drowdownRefresh();
  }






  drowdownRefresh()
  {
    this._serviceBebida.getMedida().subscribe(res=>{
        this.unidadMedidaItems=res.data;
      
    },error=>{
      console.log(error)
    })
  }
  onSubmit(form:NgForm)
  {
    console.log(this._serviceBebida.form.value.imagen)
    console.log(this._serviceBebida.form.value)
    
   /* this._serviceBebida.insertBebida(this._serviceBebida.form.value).subscribe(res=>{
      this.snackbar.open('Creado exitosamente','',{
        duration:3000,
        verticalPosition:'top'
  
    })
    console.log(form.value)
  })*/
    }
    showPreview(event :HtmlInputEvent) {
      let res;
      this.file=event.target.files[0];
      console.log(this.file)
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.readAsText(this.file)
      console.log(reader.readAsText(this.file))
       reader.onload = ()=>{
        res=reader.result;
        console.log(res)
        this._serviceBebida.form.controls['imagen'].setValue(reader.result)
        console.log(reader.result);
      
      };
      console.log(res)
      this._serviceBebida.form.controls['imagen'].setValue(res)
      //this._serviceBebida.form.
      console.log(this._serviceBebida.form.value.imagen)
  }
  /*
      const file = (event.target as HTMLInputElement).files[0];
      this._serviceBebida.form.controls['imagen'].setValue(file)
      console.log(this._serviceBebida.form.value)
      }*/
}
