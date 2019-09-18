import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {getServiceTypeList} from 'src/app/service-type/actions/service-type-list.actions';
import {ServiceTypeModel} from 'src/app/service-type/models/service-type.model';
import {ServiceTypeListState} from 'src/app/service-type/reducers/service-type-list.reducers';
import {MatDialog, MatSnackBar, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {DialogBoxComponent} from 'src/app/dialog-boxx/dialog-boxx.component';
import {serviceTypeList, serviceTypeListLoading} from 'src/app/service-type/selectors/service-type.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-service-type-list',
  templateUrl: './service-type-list.component.html',
  styleUrls: ['./service-type-list.component.css'],
})
export class ServiceTypeListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'action'];
  serviceTypes$;
  loading$: Observable<boolean> = this.store.select(serviceTypeListLoading);
  dataSource: MatTableDataSource<ServiceTypeModel>;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private store: Store<ServiceTypeListState>, public dialog: MatDialog, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.store.dispatch(getServiceTypeList());
    this.serviceTypes$ = this.store.select(serviceTypeList);

    this.serviceTypes$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  get() {
    this.store.dispatch(getServiceTypeList());
  }

  openDialog(action, obj?) {
    const config = {width: '400px', height: '350px', data: {type: action, object: obj}};
    const dialogRef = this.dialog.open(DialogBoxComponent, config);
  }
}
