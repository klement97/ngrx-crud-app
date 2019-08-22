import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list-component/product-list.component';
import {StoreModule} from '@ngrx/store';
import {ProductModule} from 'src/app/product/product.module';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import {ProductListServices} from 'src/app/product/store/services/product-list.services';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // importojme reducer-in e product-list
    // reduceri importohet si root state kur duhet te jete i arritshem nga cdo pjese e aplikacionit,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    ProductModule,
    RouterModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
  ],
  providers: [ProductListServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
