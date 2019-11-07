import { Component, OnInit, Inject } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-editarbebidas',
  templateUrl: './editarbebidas.component.html',
  styleUrls: ['./editarbebidas.component.css']
})
export class EditarbebidasComponent implements OnInit {

  constructor(
    private _serviceBebida:BebidaService,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private snackbar:MatSnackBar
  ) { }
  public  unidadMedidaItems:any;
  ngOnInit() {
    this.drowdownRefresh();
      console.log(this.data)
    this._serviceBebida.form.setValue(this.data);
    console.log(this._serviceBebida.form.value)

   
  }
  drowdownRefresh()
  {
    this._serviceBebida.getMedida().subscribe(res=>{
        this.unidadMedidaItems=res.data;
      
    },error=>{
      console.log(error)
    })
  }
  onSubmit(bebida)
  {
     this._serviceBebida.updateBebida(bebida.value).subscribe(res=>{
      this.snackbar.open('Editado correctamente','Aceptar',{
        duration:3000,
        verticalPosition:'top'
      })
    },error=>{
      console.log(error)
    })
  console.log(bebida.value)
  }

}
