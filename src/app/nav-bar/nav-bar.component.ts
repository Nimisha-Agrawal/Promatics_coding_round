import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  options:string[] = [ 'Capsule','Tablet', 'Syrup' ];
  @Output() openTablet = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  openForm(name:string){
      this.openTablet.emit(name);
      //this.router.navigate(["FormComponent"]);
  }

}
