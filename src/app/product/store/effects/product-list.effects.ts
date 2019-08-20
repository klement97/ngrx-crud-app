import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as productListActions from '../actions/product-list.actions';
import {getQuantitySuccess} from '../actions/product-list.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {Store} from '@ngrx/store';
import {ProductListState} from 'src/app/product/store/reducers/product-list.reducers';
import {of} from 'rxjs';

@Injectable()
export class ProductListEffects {

  loadQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productListActions.getQuantity),
      switchMap(() => this.productListService.getAll().pipe(
        map((products) => console.log(products))
      ))
    ), ({dispatch: false}));

  constructor(private actions$: Actions, private productListService: ProductListServices, private store: Store<ProductListState>) {
  }
}
