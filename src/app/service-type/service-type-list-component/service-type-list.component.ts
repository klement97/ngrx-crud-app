import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {addServiceType, getServiceTypeList, deleteServiceType} from 'src/app/service-type/actions/service-type-list.actions';
import {ServiceTypeModel} from 'src/app/service-type/models/service-type.model';
import {ServiceTypeListState} from 'src/app/service-type/reducers/service-type-list.reducers';
import {MatDialog, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {DialogBoxComponent} from 'src/app/dialog-boxx/dialog-boxx.component';

@Component({
  selector: 'app-service-type-list',
  templateUrl: './service-type-list.component.html',
  styleUrls: ['./service-type-list.component.css'],
})
export class ServiceTypeListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'action'];
  serviceTypes$;
  loading$: false;
  dataSource: MatTableDataSource<ServiceTypeModel>;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private store: Store<ServiceTypeListState>, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.serviceTypes$ = this.store.select(state => state['service-type-list'].serviceTypes);

    this.serviceTypes$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });

    this.store.select(state => state['service-type-list'].loading).subscribe(loading => this.loading$ = loading);
  }

  get() {
    this.store.dispatch(getServiceTypeList());
  }

  add(serviceType) {
    // ne kete moment na duhet te shtojme produkte, bejme dispatch aksionin korrespondues
    this.store.dispatch(addServiceType({serviceType}));
  }

  remove(id) {
    this.store.dispatch(deleteServiceType({id}));
  }

  openDialog(action, obj?) {
    const config = {width: '300px', data: {type: action, object: obj}};
    const dialogRef = this.dialog.open(DialogBoxComponent, config);
  }
}
