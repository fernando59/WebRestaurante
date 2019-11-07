import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public data:any,
    public dialogRef:MatDialogRef<DialogComponent>
  ) { }

  ngOnInit() {
    console.log(this.data)
  }
  onClose()
  {
    this.dialogRef.close(false);
  }


}
