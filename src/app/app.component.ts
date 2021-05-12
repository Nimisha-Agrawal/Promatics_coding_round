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
<<<<<<< HEAD
  
=======
>>>>>>> cdbdf60d7ba39860c26e198b27f02025863d6ce9
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
