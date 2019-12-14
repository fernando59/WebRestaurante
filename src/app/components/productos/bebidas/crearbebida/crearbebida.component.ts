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
    file:Array<File>
    file2:any;
    archivo={
      nombre:null,
      nombreArchivo:null,
      base64Text:null
    }
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

    _leer(reader){
      let binary=reader.target.result;
      this.archivo.base64Text=btoa(binary)
     //this._serviceBebida.form.controls['imagen'].setValue(btoa( binary))
    }
    showPreview(event) {
      let fil;
      let files=event.target.files;
      fil=files[0]
      this.archivo.nombreArchivo=fil.name
      if(files && fil)
      {
        let reader=new FileReader()
        reader.onload=this._leer.bind(this);
        reader.readAsBinaryString(fil)
      }
     // console.log(imagen)
      console.log(files)
     this._serviceBebida.form.controls['imagen'].setValue(this.archivo)
      console.log(this.archivo);
      
    };
    onSubmit(form:NgForm)
    {
      console.log(this._serviceBebida.form.value.imagen)
      console.log(this._serviceBebida.form.value)
      
      this._serviceBebida.insertBebida(this._serviceBebida.form.value).subscribe(res=>{
        this.snackbar.open('Creado exitosamente','',{
          duration:3000,
          verticalPosition:'top'
    
      })
      console.log(form.value)
    })
      }
      /*-let reader = new FileReader();
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
      console.log(this._serviceBebida.form.value.imagen)*/
  }
  /*
      const file = (event.target as HTMLInputElement).files[0];
      this._serviceBebida.form.controls['imagen'].setValue(file)
      console.log(this._serviceBebida.form.value)
      }*/

 