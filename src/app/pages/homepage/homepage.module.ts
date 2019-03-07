import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedComponentsModule } from './../../components/shared-components.module';
import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MaterialModule,
  ]
})
export class HomepageModule {
}
