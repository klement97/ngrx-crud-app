import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as productList from 'src/app/service-type/reducers/service-type-list.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ServiceTypeListEffects} from 'src/app/service-type/effects/service-type-list.effects';
import {ServiceTypeServices} from 'src/app/service-type/services/service-type.services';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';


/**
 * Do te ishte e kote qe cdo reducer te paketes service-type ta importonim ne app.module direkt
 * prandaj cdo reducer importohet te moduli i vet dhe me vone klasa qe eksportohet poshte
 * importohet te moduli kryesor
 */
@NgModule({
  imports: [
    MatSnackBarModule,
    StoreModule.forFeature(productList.serviceTypeListFetureKey, productList.reducer),
    EffectsModule.forFeature([ServiceTypeListEffects]),
  ],

  exports: [],
  providers: [
    ServiceTypeServices, MatSnackBar
  ],
})

export class ServiceTypeModule {
}

// TODO: ServiceTypeModule duhet te importohet ne app.module qe reducerat e service-type list te njihen prej applikacionit
