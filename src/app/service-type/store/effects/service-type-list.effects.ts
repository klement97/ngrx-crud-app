import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getServiceTypes,
  getServiceTypesFailure,
  getServiceTypesSuccess
} from 'src/app/service-type/store/actions/service-type-list.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ServiceTypeServices} from 'src/app/service-type/store/services/service-type.services';
import {Store} from '@ngrx/store';
import {ServiceTypeListState} from 'src/app/service-type/store/reducers/service-type-list.reducers';
import {Observable, of} from 'rxjs';

@Injectable()
export class ServiceTypeListEffects {

  loadQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getServiceTypes),
      switchMap(() => this.serviceTypeService.getAll().pipe(
        map(serviceTypes => getServiceTypesSuccess({serviceTypes}))
        ), // pipe
        // catchError()
      ) // switchMap
    ), // pipe
  ); // effect

  constructor(private actions$: Actions, private serviceTypeService: ServiceTypeServices, private store: Store<ServiceTypeListState>) {
  }
}
