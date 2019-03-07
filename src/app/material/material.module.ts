import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatMenuModule, MatDialogModule, MatSliderModule,
  MatExpansionModule, MatAutocompleteModule, MatGridListModule
} from '@angular/material';


const angularMaterialModules = [
  MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatMenuModule, MatDialogModule, MatSliderModule,
  MatExpansionModule,
  MatAutocompleteModule, MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...angularMaterialModules
  ],
  exports: [
    ...angularMaterialModules
  ]

})
export class MaterialModule { }
