import {Action, createReducer, on} from '@ngrx/store';
import {ProductModel} from 'src/app/product/store/models/product.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';


export const tiniFeatureKey = 'tini';

export interface State extends EntityState<ProductModel> {
  user_id: string | number;
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export const initialState: State = adapter.getInitialState({
    user_id: '' || null,
  })
;

const tiniReducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return tiniReducer(state, action);
}
