import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ServiceTypeModel} from 'src/app/product/store/models/service-type.model';
import * as productList from 'src/app/product/store/actions/product-list.actions';

export const entityTestFeatureKey = 'entityTest';

export interface State extends EntityState<ServiceTypeModel> {
}

export const adapter: EntityAdapter<ServiceTypeModel> = createEntityAdapter<ServiceTypeModel>();


export const initialState: State = adapter.getInitialState({});

const entityTestReducer = createReducer(
  initialState,

  on(productList.addProduct, (state, {quantity}) => {
    return adapter.addOne(quantity, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return entityTestReducer(state, action);
}
