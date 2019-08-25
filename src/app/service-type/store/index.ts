import {ServiceTypeListState} from 'src/app/service-type/store/reducers/service-type-list.reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromServiceType from './reducers/service-type-list.reducers';

export interface State {
  serviceTypes: ServiceTypeListState;
}

export const reducers: ActionReducerMap<State> = {
  serviceTypes: fromServiceType.reducer,
};

export const selectServiceTypeState = createFeatureSelector<ServiceTypeListState>('service-type-list');

export const selectServiceTypeEntities = createSelector(
  selectServiceTypeState,
  fromServiceType.selectServiceTypeEntities
);
export const selectAllServiceTypes = createSelector(
  selectServiceTypeState,
  fromServiceType.selectAllServiceTypes
);
export const selectServiceTypeTotal = createSelector(
  selectServiceTypeState,
  fromServiceType.selectServiceTypeTotal
);
