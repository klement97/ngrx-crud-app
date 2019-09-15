import {Action, createReducer, on} from '@ngrx/store';
import {
  addServiceTypeSuccess,
  deleteServiceTypeSuccess,
  getServiceTypeList,
  getServiceTypeListFailed,
  getServiceTypeListSuccess, updateServiceTypeFailed,
  updateServiceTypeSuccess
} from 'src/app/service-type/actions/service-type-list.actions';
import {ServiceTypeModel} from 'src/app/service-type/models/service-type.model';
import {addOne, deleteOne, updateOne} from 'src/environments/const';

export const serviceTypeListFetureKey = 'service-type-list';

/**
 * Ketu behet nje deklarim se State do te jete ne kete tip
 * ne rastin tone State ka vetem nje atribut i cili eshte nje list
 * me objekte te tipit ServiceTypeModel
 */
export interface ServiceTypeListState {
  serviceTypes: ServiceTypeModel[];
  loading: boolean;
}


/**
 * Ne kete moment shkruajme nje state fillestar i cili do te jete i vlefshem ne fillim
 * vetem ne ndezje te aplikacionit, perpara se te behet ndonje kerkese nga serveri,
 * dhe normalisht, perpara se te behet nje kerkese presim qe lista e produkteve te jete boshe
 */
export const initialState: ServiceTypeListState = {
  serviceTypes: [],
  loading: false,
};


/**
 * Ketu deklarojme reducerat.
 * Reducerat jane funksione te thjeshta te cilat vendosin cfare do te ndodhi me state-in ne rast se behet
 * dispatch nje action.
 */
const serviceTypeListReducer = createReducer(
  initialState,
  on(getServiceTypeList, state => ({
    ...state,
    loading: true,
  })),

  on(getServiceTypeListSuccess, (state, {serviceTypes}) => ({
    ...state,
    loading: false,
    serviceTypes,
  })),

  on(getServiceTypeListFailed, (state, {error}) => ({
    ...state,
    error,
    loading: false,
  })),

  on(addServiceTypeSuccess, (state, {serviceType}) => ({
    ...state,
    serviceTypes: addOne(state.serviceTypes, serviceType),
  })),

  on(updateServiceTypeSuccess, (state, {serviceType}) => ({
    ...state,
    serviceTypes: updateOne(state.serviceTypes, serviceType)
  })),

  on(updateServiceTypeFailed, (state, {error}) => ({
    ...state,
    error,
  })),

  on(deleteServiceTypeSuccess, (state, {id}) => ({
    ...state,
    serviceTypes: deleteOne(state.serviceTypes, id),
  }))
);

/**
 * Ky export eshte i domosdoshem ne menyre te tille qe reducerin te mund
 * ta regjistrojme ne app.module
 * @param state: Interface-i State qe kemi shkruajtur me siper
 * @param action: objekti action i tipit Action nga @ngrx/store
 */
export function reducer(state: ServiceTypeListState | undefined, action: Action) {
  return serviceTypeListReducer(state, action);
}

// tslint:disable-next-line:max-line-length
// TODO: Tani pasi e kemi shkruajtur reducer-in eshte e domosdoshme qe kete reducer ta importojme ne modulin korrespondues => service-type.module.ts
