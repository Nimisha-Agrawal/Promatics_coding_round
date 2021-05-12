import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { DataService } from './data.service';
=======
>>>>>>> cdbdf60d7ba39860c26e198b27f02025863d6ce9

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    ShowInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
  providers: [DataService],
=======
  providers: [],
>>>>>>> cdbdf60d7ba39860c26e198b27f02025863d6ce9
  bootstrap: [AppComponent]
})
export class AppModule { }
