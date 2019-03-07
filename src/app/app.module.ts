import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageModule } from './pages/homepage/homepage.module';
import { DetailsModule } from './pages/details-page/details.module';

import { SharedComponentsModule } from './components/shared-components.module';
import { MaterialModule } from './material/material.module';

import { ApiService } from './services/api.service';
import { AutocompleteFilterService } from './services/autocomplete-filter.service'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HomepageModule,
    DetailsModule,
    SharedComponentsModule,
    FlexLayoutModule,
  ],
  providers: [ApiService, AutocompleteFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
