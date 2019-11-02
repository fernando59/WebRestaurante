import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data:any,
    private _personaService:PersonaService
  ) { }

  ngOnInit() {
    this._personaService.personalist=this.data;
    console.log(this._personaService.personalist)
  }

}
