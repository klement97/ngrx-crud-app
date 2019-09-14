import {createAction, props} from '@ngrx/store';

export const getServiceTypeList = createAction(
  '[ServiceTypes API] Get ServiceType From API',
);

export const getServiceTypeListSuccess = createAction(
  '[ServiceTypes API] Get ServiceType From API Success',
  props<{ serviceTypes }>()
);

export const getServiceTypeListFailed = createAction(
  '[ServiceType API] Get ServiceType From API Failed',
  props<{ error }>()
);

export const addServiceType = createAction(
  '[Service Types List Page] Added ServiceType',
  props<{ serviceType }>()
);

export const addServiceTypeSuccess = createAction(
  '[Service Types API] Service Type Added Successfully',
  props<{ serviceType }>()
);

export const addServiceTypeFailed = createAction(
  '[Service Types API] Service Type Add Failed',
  props<{ error }>()
);

export const updateServiceType = createAction(
  '[Service Type List Page] Update Service Type',
  props<{ serviceType }>()
);
export const updateServiceTypeSuccess = createAction(
  '[Service Type List Page] Service Type Updated Successfully',
  props<{ serviceType }>()
);
export const updateServiceTypeFailed = createAction(
  '[Service Type List Page] Update Service Type',
  props<{ error }>()
);

export const removeServiceType = createAction(
  '[Service Types List Page] Remove Service Type',
  props<{ id }>()
);

export const removeServiceTypeSuccess = createAction(
  '[Service Types List Page] Remove Service Type',
  props<{ id }>()
);

export const removeServiceTypeFailed = createAction(
  '[Service Types List Page] Remove Service Type',
  props<{ error }>()
);
