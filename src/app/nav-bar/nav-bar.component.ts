import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    @ViewChild(FormComponent) form : FormComponent;

  options:string[] = [ 'Capsule','Tablet', 'Syrup' ];
  showForm:boolean = false;
  name:string = "";
  @Output() openTablet = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  openForm(name:string){
      //this.openTablet.emit(name);
     // this.form.ngOnInit();
     this.showForm=true;
     this.name = name;
      //this.router.navigate(["FormComponent"]);
  }

  showInformation(event){
    this.router.navigate(['saved-data',{data:event}]);
  }

}
