import {createAction, props} from '@ngrx/store';
import {Error} from 'tslint/lib/error';

export const addProduct = createAction(
  '[Products] Added Product',
  props<({ payload: { quantity: number } })>()
);

export const removeProduct = createAction(
  '[Products] Removed Product',
  props<({ payload: { quantity: number } })>()
);

export const getQuantity = createAction(
  '[Products API] Get Quantity From API',
);

export const getQuantitySuccess = createAction(
  '[Products API] Get Quantity From API Success',
  props<({ payload: { quantity: number } })>()
);

export const getQuantityFailre = createAction(
  '[Product API] Get Quantity From API Failed',
  props<({ payload: { error: Error } })>()
);
