import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addProduct, getQuantity, removeProduct} from 'src/app/product/store/actions/product-list.actions';
import {ProductListState} from 'src/app/product/store/reducers/product-list.reducers';
import {ServiceTypeModel} from 'src/app/product/store/models/service-type.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productQuantity$: Observable<ServiceTypeModel[]> = this.store.select(state => state['product-list'].productsQuantity);

  constructor(private store: Store<ProductListState>) {
  }

  ngOnInit() {
    this.store.dispatch(getQuantity());
  }

  add(value) {
    // ne kete moment na duhet te shtojme produkte, bejme dispatch aksionin korrespondues
    value = parseInt(value, 10);
    this.store.dispatch(addProduct({quantity: value}));
  }

  remove(value) {
    value = parseInt(value, 10);
    this.store.dispatch(removeProduct({quantity: value}));
  }
}
