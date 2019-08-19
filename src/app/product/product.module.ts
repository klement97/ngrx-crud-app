import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as productList from './store/reducers/product-list.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductListEffects} from 'src/app/product/store/effects/product-list.effects';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {ProductListComponent} from 'src/app/product/product-list-component/product-list.component';

/**
 * Do te ishte e kote qe cdo reducer te paketes product ta importonim ne app.module direkt
 * prandaj cdo reducer importohet te moduli i vet dhe me vone klasa qe eksportohet poshte
 * importohet te moduli kryesor
 */
@NgModule({
  imports: [
    StoreModule.forFeature(productList.productListFetureKey, productList.reducer),
    EffectsModule.forFeature([ProductListEffects]),
  ],
  exports: [
  ],
  providers: [
    ProductListServices,
  ]
})

export class ProductModule {
}

// TODO: ProductModule duhet te importohet ne app.module qe reducerat e product list te njihen prej applikacionit
