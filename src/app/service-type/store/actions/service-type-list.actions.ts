import {createAction, props} from '@ngrx/store';
import {Error} from 'tslint/lib/error';
import {ServiceTypeModel} from 'src/app/service-type/store/models/service-type.model';

export const addServiceType = createAction(
  '[ServiceTypes] Added ServiceType',
  props<{ serviceType: ServiceTypeModel }>()
);

export const removeServiceType = createAction(
  '[ServiceTypes] Removed ServiceType',
  props<{ serviceType: number }>()
);

export const getServiceTypes = createAction(
  '[ServiceTypes API] Get ServiceType From API',
);

export const getServiceTypesSuccess = createAction(
  '[ServiceTypes API] Get ServiceType From API Success',
  props<{ serviceType: number }>()
);

export const getServiceTypesFailure = createAction(
  '[ServiceType API] Get ServiceType From API Failed',
  props<{ error: Error }>()
);
