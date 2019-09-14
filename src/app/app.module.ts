import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceTypeListComponent} from 'src/app/service-type/service-type-list-component/service-type-list.component';
import {StoreModule} from '@ngrx/store';
import {ServiceTypeModule} from 'src/app/service-type/service-type.module';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialog,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {DialogBoxComponent} from './dialog-boxx/dialog-boxx.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceTypeListComponent,
    DialogBoxComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    // importojme reducer-in e service-type-list
    // reduceri importohet si root state kur duhet te jete i arritshem nga cdo pjese e aplikacionit,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ServiceTypeModule,
    RouterModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
