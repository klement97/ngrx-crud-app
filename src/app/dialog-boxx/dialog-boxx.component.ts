import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ServiceTypeModel} from 'src/app/service-type/store/models/service-type.model';

@Component({
  selector: 'app-dialog-boxx',
  templateUrl: './dialog-boxx.component.html',
  styleUrls: ['./dialog-boxx.component.css']
})
export class DialogBoxComponent {
  action: string;
  localData: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ServiceTypeModel) {
    console.log(data);
    this.localData = {...data};
    this.action = this.localData.action;
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.localData});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }

}
