import { Component, OnInit } from '@angular/core';
import { BebidaService } from 'src/app/services/bebida/bebida.service';

@Component({
  selector: 'app-crearbebida',
  templateUrl: './crearbebida.component.html',
  styleUrls: ['./crearbebida.component.css']
})
export class CrearbebidaComponent implements OnInit {

  constructor(
    private _serviceBebida:BebidaService
  ) { }

  ngOnInit() {
  
  }

  
}
