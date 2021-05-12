import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as EventEmitter from 'events';
import { DataService } from '../data.service';
import { ModalBoxService } from '../modal-box.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 // @Input("type") typeOfMedicine: string;
 // @Output() sendInformation = new EventEmitter();

  @Input("type") typeOfMedicine: string;
  @Output()  sendInformation = new EventEmitter();


  tabletForm : FormGroup;
  medicineName: FormControl;
  frequency : FormControl;
  duration : FormControl;
  medicineInfo : FormControl;
  medicineForm = new FormGroup({
    medicineList: new FormArray([])
  });
  formCount: any = 0;
  showForm: boolean;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private data:DataService) { this.route.params.subscribe(params => {
        console.log(params);
        if(params['showForm']){
            this.showForm = params['showForm'];
        }  
      })
  }
      ngOnInit():void{
        this.create_FormControls();
        this.create_Form();
      }
  // ngOnInit(): void {
  //     this.getFormCount();
  //     this.addMedicineForm();
  //   this.create_FormControls();
  //   this.create_Form();
  // }

  // getFormCount() {
  //   this.formCount = this.modalBoxService.getMedicineFormCount();
  // }

  // addMedicineForm() {
  //   const formArray = this.medicineForm.get('medicineList') as FormArray;
  //       const pid = this.createPid(formArray);
  //       formArray.push(this.create_Form(pid));
  //       this.formCount = formArray.length;

  // }
  //         createPid(list: FormArray) {​​​​​​
  //         return (list.controls[list.length - 1].get('pid').value + 1);
  //                 }​​​​​​​​

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
              this.showForm=false;
                //this.sendInformation.emit(this.tabletForm.value);
                this.data.setData(this.tabletForm.value);
              this.router.navigate(["saved-data"]);
              this.tabletForm.reset();
              console.log("Submitted");
            }
          }
    }
