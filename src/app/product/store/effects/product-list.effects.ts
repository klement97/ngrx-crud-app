import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as productList from '../actions/product-list.actions';
import {catchError, map, mapTo, mergeMap, switchMap} from 'rxjs/operators';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class ProductListEffects {

  // getQuantity$: Observable<Action> = createEffect(() => this.actions$.pipe(
  //   ofType(productList.getQuantity.type),
  //   switchMap(() => this.productListService.getQuantity()
  //     .pipe(
  //       map(quantity => ({type: productList.getQuantitySuccess, paylaod: quantity})),
  //       catchError(() => of({type: productList.getQuantityFailure}))
  //     ))
  // ));

  // @Effect()
  // public firstAction$: Observable<Action> = this.actions$.pipe(
  //   ofType(productList.getQuantity.type),
  //   mapTo(productList.getQuantitySuccess({payload: {quantity: 1}}))
  // );

  constructor(private actions$: Actions, private productListService: ProductListServices) {
  }
}
