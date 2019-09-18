import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as productList from 'src/app/service-type/reducers/service-type-list.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ServiceTypeListEffects} from 'src/app/service-type/effects/service-type-list.effects';
import {ServiceTypeServices} from 'src/app/service-type/services/service-type.services';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';

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
