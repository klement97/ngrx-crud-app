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
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const serviceTypeListFetureKey = 'service-type-list';

export interface ServiceTypeListState extends EntityState<ServiceTypeModel> {
  loading: boolean;
}

export const adapter: EntityAdapter<ServiceTypeModel> = createEntityAdapter<ServiceTypeModel>({});

export const initialState: ServiceTypeListState = adapter.getInitialState({
  loading: false,
});


const serviceTypeListReducer = createReducer(
  initialState,
  on(getServiceTypeList, state => ({
    ...state,
    loading: true,
  })),

  on(getServiceTypeListSuccess, (state, {serviceTypes}) => {
    return adapter.addAll(serviceTypes, state);
  }),

  on(getServiceTypeListFailed, (state, {error}) => ({
    ...state,
    error,
    loading: false,
  })),

  on(addServiceTypeSuccess, (state, {serviceType}) => {
    return adapter.addOne(serviceType, state);
  }),

  on(updateServiceTypeSuccess, (state, {serviceType}) => {
    return adapter.updateOne(serviceType, state);
  }),

  on(updateServiceTypeFailed, (state, {error}) => ({
    ...state,
    error,
  })),

  on(deleteServiceTypeSuccess, (state, {id}) => {
    return adapter.removeOne(id, state);
  })
);

export function reducer(state: ServiceTypeListState | undefined, action: Action) {
  return serviceTypeListReducer(state, action);
}
