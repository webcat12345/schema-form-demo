import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { MaterialModule } from './shared/material/material.module';

import { FormBuildService } from './core/services/form-build.service';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    SchemaFormModule
  ],
  providers: [
    {provide: WidgetRegistry, useClass: DefaultWidgetRegistry},
    FormBuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
