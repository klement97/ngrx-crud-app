import {createAction, props} from '@ngrx/store';
import {Error} from 'tslint/lib/error';
import {ProductModel} from 'src/app/product/store/models/product.model';

export const addProduct = createAction(
  '[Products] Added Product',
  props<{ quantity: ProductModel }>()
);

export const removeProduct = createAction(
  '[Products] Removed Product',
  props<{ quantity: number }>()
);

export const getQuantity = createAction(
  '[Products API] Get Quantity From API',
);

export const getQuantitySuccess = createAction(
  '[Products API] Get Quantity From API Success',
  props<{ quantity: number }>()
);

export const getQuantityFailure = createAction(
  '[Product API] Get Quantity From API Failed',
  props<{ error: Error }>()
);
