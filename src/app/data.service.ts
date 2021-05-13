import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Medicine;
  medicineList:Medicine[]=[];
  
  getData(){
    return this.medicineList;
  }

  setData(data:any,optionSelected:string){
    const medicine = new Medicine(optionSelected,data['medicineName'],data['frequency'],data['duration'],data['medicineInfo']);
    this.medicineList.push(medicine);
  }
  constructor() { }

//   private data = {};  
  
//  setOption(option, value) {      
//     this.data[option] = value;  
//   }  
  
//   getOption() {  
//     return this.data;  
//   }  
}
