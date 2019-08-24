import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addServiceType, getServiceTypes, removeServiceType} from 'src/app/service-type/store/actions/service-type-list.actions';
import {ServiceTypeModel} from 'src/app/service-type/store/models/service-type.model';
import {ServiceTypeListState} from 'src/app/service-type/store/reducers/service-type-list.reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './service-type-list.component.html',
  styleUrls: ['./service-type-list.component.css']
})
export class ServiceTypeListComponent implements OnInit {

  productQuantity$: Observable<ServiceTypeModel[]> = this.store.select(state => state['service-type-list'].productsQuantity);

  constructor(private store: Store<ServiceTypeListState>) {
  }

  ngOnInit() {
    this.store.dispatch(getServiceTypes());
  }

  add(serviceType) {
    // ne kete moment na duhet te shtojme produkte, bejme dispatch aksionin korrespondues
    this.store.dispatch(addServiceType({serviceType}));
  }

  remove(id) {
    this.store.dispatch(removeServiceType({id}));
  }
}
