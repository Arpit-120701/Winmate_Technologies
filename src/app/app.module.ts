import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { NgFor , NgForOf } from '@angular/common';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[      
          BrowserModule,
          HttpClientModule,
          HttpClient
          
    ],
    providers:[ HttpClientModule, HttpClient],
    bootstrap:[AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]


})

@Component({
    imports:[NgFor , NgForOf]
})

export class AppModule { }

