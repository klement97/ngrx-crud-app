import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as productListActions from 'src/app/service-type/store/actions/service-type-list.actions';
import {map, switchMap} from 'rxjs/operators';
import {ServiceTypeServices} from 'src/app/service-type/store/services/service-type.services';
import {Store} from '@ngrx/store';
import {ServiceTypeListState} from 'src/app/service-type/store/reducers/service-type-list.reducers';

@Injectable()
export class ServiceTypeListEffects {

  loadQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productListActions.getServiceTypes),
      switchMap(() => this.serviceTypeService.getAll().pipe(
        map((products) => console.log(products))
      ))
    ), ({dispatch: false}));

  constructor(private actions$: Actions, private serviceTypeService: ServiceTypeServices, private store: Store<ServiceTypeListState>) {
  }
}
