import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import {MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterActionComponent } from './footer-action/footer-action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    ShowInformationComponent,
    FooterActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents:[FormComponent]
})
export class AppModule { }
