import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input("type") typeOfMedicine: string;
  @Output()  sendInformation = new EventEmitter();

  tabletForm : FormGroup;
  medicineName: FormControl;
  frequency : FormControl;
  duration : FormControl;
  medicineInfo : FormControl;

  constructor(private router: Router) { 
   
  }

  ngOnInit(): void {
    this.create_FormControls();
    this.create_Form();
  }
    create_FormControls(){
      this.medicineName = new FormControl('',Validators.required);
      this.frequency = new FormControl('',Validators.required);
      this.duration = new FormControl('',Validators.required);
      this.medicineInfo = new FormControl('',Validators.required);
    }
    create_Form(){
        this.tabletForm = new FormGroup({
           medicineName : this.medicineName,
          frequency : this.frequency,
          duration : this.duration,
          medicineInfo : this.medicineInfo
          });
        }

          onSubmit(){
            if(this.tabletForm.valid){
              console.log("Submitted");
                this.sendInformation.emit(this.tabletForm.value);
             // this.router.navigate(["saved-data",{data:this.tabletForm.value}]);
              this.tabletForm.reset();
            }
          }
    }
