import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';


import { MdDatepickerModule, MdFormFieldModule, MdNativeDateModule, MdInputModule } from '@angular/material';
import {AppRoutingModule} from './app-routing.module';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { CourseForm } from 'app/template-driven-form/course-form';


@NgModule({
  declarations: [
    AppComponent,
    CourseForm,
    DatepickerComponent,
    HomeComponent,
    PostsComponent,
    TemplateDrivenFormComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdDatepickerModule,
    MdFormFieldModule,
    MdInputModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
