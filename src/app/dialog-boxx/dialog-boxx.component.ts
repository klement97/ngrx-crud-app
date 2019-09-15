import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ServiceTypeModel} from 'src/app/service-type/models/service-type.model';
import {Store} from '@ngrx/store';
import {ServiceTypeListState} from 'src/app/service-type/reducers/service-type-list.reducers';
import {addServiceType, deleteServiceType, updateServiceType} from 'src/app/service-type/actions/service-type-list.actions';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  action: string;
  localData: any;

  constructor(
    private store: Store<ServiceTypeListState>,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ServiceTypeModel) {
    this.localData = {...data};
    this.action = this.localData.action;
  }

  doAction(type, name?, price?) {
    if (type === 'Update') {
      const serviceType = new ServiceTypeModel();
      serviceType.id = this.localData['object'].id;
      serviceType.name = name;
      serviceType.price = price;

      this.store.dispatch(updateServiceType({serviceType}));
    } else if (type === 'Add') {
      const serviceType = new ServiceTypeModel();
      serviceType.name = name;
      serviceType.price = price;
      console.log('Entered Add');
      this.store.dispatch(addServiceType({serviceType}));

    } else if (type === 'Delete') {
      const id = this.data['object'].id;
      console.log('Entered Delete Case');
      this.store.dispatch(deleteServiceType({id}));
      console.log('Dispatched Delete Action');
    }
    return this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }

}
