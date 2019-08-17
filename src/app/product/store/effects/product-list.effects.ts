import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as productListActions from '../actions/product-list.actions';
import {catchError, map, mapTo, mergeMap, switchMap, tap} from 'rxjs/operators';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {EMPTY, Observable, ObservedValueOf, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {TypedAction} from '@ngrx/store/src/models';
import { getQuantity } from '../actions/product-list.actions';

@Injectable()
export class ProductListEffects {

  // @Effect()
  // getQuantity$: Observable<Action> = this.actions$.pipe(
  //   ofType(productListActions.getQuantity),
  //   switchMap(() => {
  //     return this.productListService.getQuantity()
  //       .pipe(
  //         map((value) => {
  //           return of(productListActions.getQuantitySuccess({payload: {quantity: value}}));
  //         })
  //       );
  //   })
  // );

  constructor(private actions$: Actions, private productListService: ProductListServices) {
  }
}
