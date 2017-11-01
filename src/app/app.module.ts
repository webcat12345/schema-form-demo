import { BrowserModule } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { MaterialModule } from './shared/material/material.module';
import { PrettyJsonModule, SafeJsonPipe } from 'angular2-prettyjson';

import { FormBuildService } from './core/services/form-build.service';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { MaWidgetRegistry } from './core/widgets/maWidgetRegistry';
import { WidgetsModule } from './core/widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    SchemaFormModule,
    WidgetsModule,
    PrettyJsonModule
  ],
  providers: [
    {provide: WidgetRegistry, useClass: MaWidgetRegistry},
    {provide: JsonPipe, useClass: SafeJsonPipe},
    FormBuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
