import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addServiceType, getServiceTypes, removeServiceType} from 'src/app/service-type/store/actions/service-type-list.actions';
import {ServiceTypeModel} from 'src/app/service-type/store/models/service-type.model';
import {ServiceTypeListState} from 'src/app/service-type/store/reducers/service-type-list.reducers';
import {MatDialog, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DialogBoxComponent} from 'src/app/dialog-boxx/dialog-boxx.component';

@Component({
  selector: 'app-service-type-list',
  templateUrl: './service-type-list.component.html',
  styleUrls: ['./service-type-list.component.css'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class ServiceTypeListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'action'];
  serviceTypes$;
  dataSource: MatTableDataSource<ServiceTypeModel>;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private store: Store<ServiceTypeListState>, public dialog: MatDialog) {
    // tslint:disable-next-line:no-shadowed-variable
    this.serviceTypes$ = store.select(state => state['service-type-list'].serviceTypes);
    this.serviceTypes$.subscribe(data => this.dataSource = new MatTableDataSource(data));
  }

  ngOnInit() {
  }

  get() {
    this.store.dispatch(getServiceTypes());
  }

  add(serviceType) {
    // ne kete moment na duhet te shtojme produkte, bejme dispatch aksionin korrespondues
    this.store.dispatch(addServiceType({serviceType}));
  }

  remove(id) {
    this.store.dispatch(removeServiceType({id}));
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });
  }
}
