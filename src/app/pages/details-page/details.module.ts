import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { MaterialModule } from './../../material/material.module';
import { SharedComponentsModule } from './../../components/shared-components.module';

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule
  ]
})
export class DetailsModule { }
