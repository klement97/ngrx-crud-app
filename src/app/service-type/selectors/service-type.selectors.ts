import {createFeatureSelector, createSelector} from '@ngrx/store';
import {serviceTypeListFetureKey, ServiceTypeListState} from 'src/app/service-type/reducers/service-type-list.reducers';

export const selectInitialState = createFeatureSelector<ServiceTypeListState>(serviceTypeListFetureKey);

export const serviceTypeList = createSelector(
  selectInitialState,
  state => state.entities
);

export const serviceTypeListLoading = createSelector(
  selectInitialState,
  state => state.loading
);
