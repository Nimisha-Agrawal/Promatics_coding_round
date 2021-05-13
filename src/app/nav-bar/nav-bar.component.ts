import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild(FormComponent) form: FormComponent;

  options: string[] = ['Capsule', 'Tablet', 'Syrup'];
  showForm: boolean = false;
  name: string = "";
  @Output() openTablet = new EventEmitter();
  constructor(private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void {

  }

  openForm(name: string) {
    //this.openTablet.emit(name);
    // this.form.ngOnInit();
    this.showForm = !this.showForm;
    this.name = name;
    //this.router.navigate(["FormComponent"]);
  }

  // showInformation(event){
  //   this.router.navigate(['saved-data',{data:event}]);
  // }
  openDialog(option:string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
  //   dialogConfig.position = {
  //     'top': '0',
  //     'right': '0'
  // };
  dialogConfig.data = {
    title: option
};

    // this.dialog.open(FormComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(FormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }

}
