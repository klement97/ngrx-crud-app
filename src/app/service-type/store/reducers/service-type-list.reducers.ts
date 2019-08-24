import {Action, createReducer, on} from '@ngrx/store';
/**
 * importimi i aksioneve duhet bere me * dhe duhet perdorur nje alias qe te aksesojme
 * cdo gje qe ka ky file actions
 */
import * as ServiceTypeListActions from 'src/app/service-type/store/actions/service-type-list.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {ServiceTypeModel} from 'src/app/service-type/store/models/service-type.model';
import {EntityAdapter} from '@ngrx/entity/src/models';

export const serviceTypeListFetureKey = 'service-type-list';

/**
 * Ketu behet nje deklarim se State do te jete ne kete tip
 * ne rastin tone State ka vetem nje atribut i cili eshte nje list
 * me objekte te tipit ServiceTypeModel
 */
export interface ServiceTypeListState extends EntityState<ServiceTypeModel> {
}

export const adapter: EntityAdapter<ServiceTypeModel> = createEntityAdapter<ServiceTypeModel>();

/**
 * Ne kete moment shkruajme nje state fillestar i cili do te jete i vlefshem ne fillim
 * vetem ne ndezje te aplikacionit, perpara se te behet ndonje kerkese nga serveri,
 * dhe normalisht, perpara se te behet nje kerkese presim qe lista e produkteve te jete boshe
 */
export const initialState: ServiceTypeListState = adapter.getInitialState({});


/**
 * Ketu deklarojme reducerat.
 * Reducerat jane funksione te thjeshta te cilat vendosin cfare do te ndodhi me state-in ne rast se behet
 * dispatch nje action.
 */
const serviceTypeListReducer = createReducer(
  initialState,
  on(ServiceTypeListActions.addServiceType, (state, {serviceType}) => {
    return adapter.addOne(serviceType, state);
  }),
  on(ServiceTypeListActions.removeServiceType, (state, {id}) => {
    return adapter.removeOne(id, state);
  }),
  on(ServiceTypeListActions.getServiceTypes, (state) => ({
    ...state
  })),
  on(ServiceTypeListActions.getServiceTypesSuccess, (state, {serviceTypes}) => {
    return adapter.addAll(serviceTypes, state);
  })
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
