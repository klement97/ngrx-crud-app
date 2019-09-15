import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addServiceType, addServiceTypeFailed, addServiceTypeSuccess,
  deleteServiceType,
  deleteServiceTypeFailed,
  deleteServiceTypeSuccess,
  getServiceTypeList, getServiceTypeListFailed,
  getServiceTypeListSuccess,
  updateServiceType,
  updateServiceTypeFailed,
  updateServiceTypeSuccess
} from 'src/app/service-type/actions/service-type-list.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ServiceTypeServices} from 'src/app/service-type/services/service-type.services';
import {of} from 'rxjs';

@Injectable()
export class ServiceTypeListEffects {

  getServiceTypeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getServiceTypeList),
      switchMap(() => this.serviceTypeService.getAll().pipe(
        map(serviceTypes => getServiceTypeListSuccess({serviceTypes})),
        catchError(error => of(getServiceTypeListFailed({error})))
      ))));

  addServiceType$ = createEffect(() => this.actions$.pipe(
    ofType(addServiceType),
    switchMap(payload => this.serviceTypeService.add(payload.serviceType).pipe(
      map(response => addServiceTypeSuccess({serviceType: response})),
      catchError(error => of(addServiceTypeFailed({error})))
    )),
  ));

  removeServiceType$ = createEffect(() => this.actions$.pipe(
    ofType(deleteServiceType),
    switchMap(payload => this.serviceTypeService.delete(payload.id).pipe(
      map(response => deleteServiceTypeSuccess({id: payload.id})),
      catchError(error => of(deleteServiceTypeFailed({error})))
    )),
  ));

  updateServiceType$ = createEffect(() => this.actions$.pipe(
    ofType(updateServiceType),
    switchMap(payload => this.serviceTypeService.update(payload.serviceType).pipe(
      map(response => {
        return updateServiceTypeSuccess({serviceType: response});
      }),
      catchError(error => {
        return of(updateServiceTypeFailed({error}));
      })
    )),
  ));

  constructor(private actions$: Actions, private serviceTypeService: ServiceTypeServices) {
  }
}
