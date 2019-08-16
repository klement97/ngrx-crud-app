import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {addProduct, removeProduct} from 'src/app/product/actions/product-list.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // @ts-ignore
  productQuantity$: Observable<number> = this.store.select(state => state['product-list'].productsQuantity);

  constructor(private store: Store<undefined>) {
  }

  ngOnInit() {
  }

  add() {
    this.store.dispatch(addProduct({quantity: 1}));
  }

  remove() {
    this.store.dispatch(removeProduct({quantity: 1}));
  }
}
