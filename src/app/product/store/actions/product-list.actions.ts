import {createAction, props} from '@ngrx/store';

export const addProduct = createAction(
  '[Products] Added Product',
  props<({ payload: {quantity: number} })>()
);

export const removeProduct = createAction(
  '[Products] Removed Product',
  props<({ payload: {quantity: number}})>()
);
