import {Action, createReducer, on} from '@ngrx/store';
/**
 * importimi i aksioneve duhet bere me * dhe duhet perdorur nje alias qe te aksesojme
 * cdo gje qe ka ky file actions
 */
import * as ProductListActions from 'src/app/product/store/actions/product-list.actions';

export const productListFetureKey = 'product-list';

/**
 * Ketu behet nje deklarim se State do te jete ne kete tip
 * ne rastin tone State ka vetem nje atribut i cili eshte nje list
 * me objekte te tipit ProductModel
 */
export interface State {
  productsQuantity: number;
}

/**
 * Ne kete moment shkruajme nje state fillestar i cili do te jete i vlefshem ne fillim
 * vetem ne ndezje te aplikacionit, perpara se te behet ndonje kerkese nga serveri,
 * dhe normalisht, perpara se te behet nje kerkese presim qe lista e produkteve te jete boshe
 */
export const initialState: State = {
  productsQuantity: 0,
};


/**
 * Ketu deklarojme reducerat.
 * Reducerat jane funksione te thjeshta te cilat vendosin cfare do te ndodhi me state-in ne rast se behet
 * dispatch nje action.
 */
const productListReducer = createReducer(
  initialState,
  on(ProductListActions.addProduct, (state, {payload}) => ({
    ...state,
    productsQuantity: state.productsQuantity + payload.quantity
  })),
  on(ProductListActions.removeProduct, (state, {payload}) => ({
    ...state,
    productsQuantity: state.productsQuantity - payload.quantity
  }))
);

/**
 * Ky importim eshte i domosdoshem ne menyre te tille qe reducerin te mund
 * ta regjistrojme ne app.module
 * @param state: Interface-i State qe kemi shkruajtur me siper
 * @param action: objekti action i tipit Action nga @ngrx/store
 */
export function reducer(state: State | undefined, action: Action) {
  return productListReducer(state, action);
}

// tslint:disable-next-line:max-line-length
// TODO: Tani pasi e kemi shkruajtur reducer-in eshte e domosdoshme qe kete reducer ta importojme ne modulin korrespondues => product.module.ts
