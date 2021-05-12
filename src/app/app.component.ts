import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promatics';
  name : string;
  showForm:boolean = false;
  data : any;
  showInfo = false;
  infoList:[];
  
  addForm(name){
    if(name==="Tablet" || name==="Capsule" || name==="Syrup"){
        this.showForm = true;
        this.name = name;
    }
  }
  showInformation(event){
    this.showForm = !this.showForm;
    this.showInfo = true;
      this.data = event;
  }
}
