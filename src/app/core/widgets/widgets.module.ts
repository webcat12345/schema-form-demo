import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { MaStringWidgetComponent } from './ma-string-widget/ma-string-widget.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaStringWidgetComponent
  ],
  entryComponents: [
    MaStringWidgetComponent
  ],
  declarations: [MaStringWidgetComponent]
})
export class WidgetsModule { }
