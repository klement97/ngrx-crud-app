import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ProductModel} from 'src/app/product/store/models/product.model';
import * as productList from 'src/app/product/store/actions/product-list.actions';

export const entityTestFeatureKey = 'entityTest';

export interface State extends EntityState<ProductModel> {
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();


export const initialState: State = adapter.getInitialState({});

const entityTestReducer = createReducer(
  initialState,

  on(productList.addProduct, (state, {product}) => {
    return adapter.addOne(product, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return entityTestReducer(state, action);
}
