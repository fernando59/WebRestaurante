import { Component, OnInit, Inject } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editarplato',
  templateUrl: './editarplato.component.html',
  styleUrls: ['./editarplato.component.css']
})
export class EditarplatoComponent implements OnInit {

  constructor(
    private _serviceBebida:BebidaService,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private snackbar:MatSnackBar
  ) { }

  public  unidadMedidaItems:any;
  ngOnInit() {
    this.drowdownRefresh();
      console.log(this.data)
    this._serviceBebida.form2.setValue(this.data);
    console.log(this._serviceBebida.form2.value)

   
  }
  drowdownRefresh()
  {
    this._serviceBebida.getMedida2().subscribe(res=>{
        this.unidadMedidaItems=res.data;
      
    },error=>{
      console.log(error)
    })
  }
  onSubmit(plato)
  {
     this._serviceBebida.updateBebida(plato.value).subscribe(res=>{
      this.snackbar.open('Editado correctamente','Aceptar',{
        duration:3000,
        verticalPosition:'top'
      })
    },error=>{
      console.log(error)
    })
  console.log(plato.value)
  }

}
