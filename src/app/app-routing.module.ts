import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShowInformationComponent } from './show-information/show-information.component';


const routes: Routes = [
  { path: "", redirectTo: "nav", pathMatch: "full" },
  {
    path: "nav", component: NavBarComponent,
    children: [
      { path: "form", component: FormComponent },
    ]
  },
  { path: "saved-data", component: ShowInformationComponent },
  { path: "**", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
