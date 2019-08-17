import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as productList from '../actions/product-list.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class ProductListEffects {

  getQuantity$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(productList.getQuantity.type),
    switchMap(() => this.productListService.getQuantity()
      .pipe(
        map(quantity => ({type: productList.getQuantitySuccess, paylaod: quantity})),
        catchError(() => of({type: productList.getQuantityFailure}))
      ))
  ));

  constructor(private actions$: Actions, private productListService: ProductListServices) {
  }
}
