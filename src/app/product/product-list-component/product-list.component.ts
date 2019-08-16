import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addProduct, removeProduct} from 'src/app/product/store/actions/product-list.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // @ts-ignore
  productQuantity$: Observable<number> = this.store.select(state => state['product-list'].productsQuantity);

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  add(value) {
    value = parseInt(value, 10);
    this.store.dispatch(addProduct({payload: {quantity: value}}));
  }

  remove(value) {
    value = parseInt(value, 10);
    this.store.dispatch(removeProduct({payload: {quantity: value}}));
  }
}
