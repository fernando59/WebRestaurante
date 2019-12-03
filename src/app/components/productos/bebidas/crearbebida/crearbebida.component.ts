import { Component, OnInit } from '@angular/core';

import { element } from 'protractor';
import { NgForm } from '@angular/forms';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-crearbebida',
  templateUrl: './crearbebida.component.html',
  styleUrls: ['./crearbebida.component.css']
})
export class CrearbebidaComponent implements OnInit {

  constructor(
    public _serviceBebida:BebidaService,
    private snackbar:MatSnackBar
  ) { }
    //variables
    public  unidadMedidaItems:any;

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
    this._serviceBebida.insertBebida(form.value).subscribe(res=>{
      this.snackbar.open('Creado exitosamente','',{
        duration:3000,
        verticalPosition:'top'
  
    })
    console.log(form.value)
  })
    }
}
