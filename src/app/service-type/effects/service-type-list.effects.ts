import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getServiceTypeList, getServiceTypeListSuccess, removeServiceType} from 'src/app/service-type/actions/service-type-list.actions';
import {map, switchMap} from 'rxjs/operators';
import {ServiceTypeServices} from 'src/app/service-type/services/service-type.services';
import {Store} from '@ngrx/store';
import {ServiceTypeListState} from 'src/app/service-type/reducers/service-type-list.reducers';

@Injectable()
export class ServiceTypeListEffects {

  loadQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getServiceTypeList),
      switchMap(() => this.serviceTypeService.getAll().pipe(
        map(serviceTypes => getServiceTypeListSuccess({serviceTypes}))
        ), // pipe
        // catchError()
      ) // switchMap
    ), // pipe
  ); // effect

  // removeServiceType$ = createEffect(() => this.actions$.pipe(
  //   ofType(removeServiceType),
  //   switchMap((serviceType) => this.serviceTypeService.delete().pipe(
  //     map(response => )
  //   ))
  // ));

  constructor(private actions$: Actions, private serviceTypeService: ServiceTypeServices, private store: Store<ServiceTypeListState>) {
  }
}
