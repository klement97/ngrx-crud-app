import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addServiceType,
  addServiceTypeFailed,
  addServiceTypeSuccess,
  deleteServiceType,
  deleteServiceTypeFailed,
  deleteServiceTypeSuccess,
  getServiceTypeList,
  getServiceTypeListFailed,
  getServiceTypeListSuccess,
  updateServiceType,
  updateServiceTypeFailed,
  updateServiceTypeSuccess
} from 'src/app/service-type/actions/service-type-list.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ServiceTypeServices} from 'src/app/service-type/services/service-type.services';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class ServiceTypeListEffects {

  getServiceTypeList$ = createEffect(() => this.actions$.pipe(
    ofType(getServiceTypeList),
    switchMap(() => this.serviceTypeService.getAll().pipe(
      map(serviceTypes => {
          return getServiceTypeListSuccess({serviceTypes});
        }
      ),
      catchError(error => of(getServiceTypeListFailed({error})))
    ))));

  addServiceType$ = createEffect(() => this.actions$.pipe(
    ofType(addServiceType),
    switchMap(payload => this.serviceTypeService.add(payload.serviceType).pipe(
      map(response => {
          this.snackbar.open('Service Type added successfully!', 'Close', {duration: 4000});
          return addServiceTypeSuccess({serviceType: response});
        }
      ),
      catchError(error => {
          this.snackbar.open('An error has occurred while adding.', 'Close', {duration: 4000});
          return of(addServiceTypeFailed({error}));
        }
      )
    )),
  ));

  deleteServiceType$ = createEffect(() => this.actions$.pipe(
    ofType(deleteServiceType),
    switchMap(payload => this.serviceTypeService.delete(payload.id).pipe(
      map(response => {
        this.snackbar.open('Service Type deleted successfully!', 'Close', {duration: 4000});
        return deleteServiceTypeSuccess({id: payload.id});
      }),
    )),
    catchError(error => {
        this.snackbar.open('An error has occurred while deleting.', 'Close', {duration: 4000});
        return of(deleteServiceTypeFailed({error}));
      }
    )
  ));

  updateServiceType$ = createEffect(() => this.actions$.pipe(
    ofType(updateServiceType),
    switchMap(payload => this.serviceTypeService.update(payload.serviceType).pipe(
      map(response => {
        this.snackbar.open('Updated with success!', 'Close', {duration: 4000});
        return updateServiceTypeSuccess({serviceType: response});
      }),
      catchError(error => {
        this.snackbar.open('An error has occurred while updating.', 'Close', {duration: 4000});
        return of(updateServiceTypeFailed({error}));
      })
    )),
  ));

  constructor(private actions$: Actions, private serviceTypeService: ServiceTypeServices, private snackbar: MatSnackBar) {
  }
}
