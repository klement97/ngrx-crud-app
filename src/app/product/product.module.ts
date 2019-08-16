import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as productList from './store/reducers/product-list.reducers';

/**
 * Do te ishte e kote qe cdo reducer te paketes product ta importonim ne app.module direkt
 * prandaj cdo reducer importohet te moduli i vet dhe me vone klasa qe eksportohet poshte
 * importohet te moduli kryesor
 */
@NgModule({
  imports: [
    StoreModule.forFeature(productList.productListFetureKey, productList.reducer),
  ],
})

export class ProductModule {
}

// TODO: ProductModule duhet te importohet ne app.module qe reducerat e product list te njihen prej applikacionit
