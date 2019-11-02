import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MesaService } from 'src/app/services/mesa/mesa.service';

@Component({
  selector: 'app-modalmesa',
  templateUrl: './modalmesa.component.html',
  styleUrls: ['./modalmesa.component.css']
})
export class ModalmesaComponent implements OnInit {

  constructor(
    public dialobox:MatDialogRef<ModalmesaComponent>,
    public _serviceMesa:MesaService,
    @Inject (MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {
    this._serviceMesa.mesaList=this.data;
    console.log(this._serviceMesa.mesaList)
  }
  onClose()
  {
    this.dialobox.close();
  }
}
