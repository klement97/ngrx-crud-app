import {createAction, props} from '@ngrx/store';

export const addProduct = createAction(
  '[Products] Added Product',
  props<({ quantity: number })>()
);

export const removeProduct = createAction(
  '[Products] Removed Product',
  props<({quantity: number})>()
);
