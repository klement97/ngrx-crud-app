import {Action, createReducer, on} from '@ngrx/store';
import {
  addServiceTypeSuccess,
  deleteServiceTypeSuccess,
  getServiceTypeList,
  getServiceTypeListFailed,
  getServiceTypeListSuccess, updateServiceTypeFailed,
  updateServiceTypeSuccess
} from 'src/app/service-type/actions/service-type-list.actions';
import {ServiceTypeModel} from 'src/app/service-type/models/service-type.model';
import {addOne, deleteOne, updateOne} from 'src/environments/const';

export const serviceTypeListFetureKey = 'service-type-list';

export interface ServiceTypeListState {
  serviceTypes: ServiceTypeModel[];
  loading: boolean;
}

export const initialState: ServiceTypeListState = {
  serviceTypes: [],
  loading: false,
};


const serviceTypeListReducer = createReducer(
  initialState,
  on(getServiceTypeList, state => ({
    ...state,
    loading: true,
  })),

  on(getServiceTypeListSuccess, (state, {serviceTypes}) => ({
    ...state,
    loading: false,
    serviceTypes,
  })),

  on(getServiceTypeListFailed, (state, {error}) => ({
    ...state,
    error,
    loading: false,
  })),

  on(addServiceTypeSuccess, (state, {serviceType}) => ({
    ...state,
    serviceTypes: addOne(state.serviceTypes, serviceType),
  })),

  on(updateServiceTypeSuccess, (state, {serviceType}) => ({
    ...state,
    serviceTypes: updateOne(state.serviceTypes, serviceType)
  })),

  on(updateServiceTypeFailed, (state, {error}) => ({
    ...state,
    error,
  })),

  on(deleteServiceTypeSuccess, (state, {id}) => ({
    ...state,
    serviceTypes: deleteOne(state.serviceTypes, id),
  }))
);

export function reducer(state: ServiceTypeListState | undefined, action: Action) {
  return serviceTypeListReducer(state, action);
}
