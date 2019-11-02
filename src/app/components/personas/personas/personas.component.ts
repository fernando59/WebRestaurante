import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { FormulariopersonaComponent } from '../formulariopersona/formulariopersona/formulariopersona.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(
    private _personaService:PersonaService,
    private dialog:MatDialog,
  ) { }

  ngOnInit() {
  }
  onCreate()
  {
    const dialog=new MatDialogConfig();
    dialog.autoFocus=true;
    dialog.height='600px'
    this.dialog.open(FormulariopersonaComponent,dialog);
  }
}
