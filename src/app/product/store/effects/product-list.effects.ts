import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as productListActions from '../actions/product-list.actions';
import {getQuantitySuccess} from '../actions/product-list.actions';
import {map} from 'rxjs/operators';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {Store} from '@ngrx/store';
import {State} from 'src/app/product/store/reducers/product-list.reducers';

@Injectable()
export class ProductListEffects {
  quantity: number;

  @Effect()
  getQuantity$ = this.actions$.pipe(
    ofType(productListActions.getQuantity),
    map(() => {
      // this.quantity = this.productListService.getQuantity();
      return this.store.dispatch(getQuantitySuccess({payload: {quantity: this.productListService.getQuantity()}}));
    })
  );

  // getQuantityA$ = createEffect(() => this.actions$.pipe(
  //   ofType(productListActions.getQuantity.type),
  //   map(() => {
  //     this.store.dispatch(getQuantitySuccess({payload: {quantity: this.productListService.getQuantity()}}));
  //   })
  // ));

  constructor(private actions$: Actions, private productListService: ProductListServices, private store: Store<State>) {
  }
}
