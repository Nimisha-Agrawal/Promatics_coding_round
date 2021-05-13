export class Medicine {
 public medicineName: string;
 public frequency : number;
 public duration : string;
 public medicineInfo : string;
 public optionSelected : string;

 constructor(optionSelected:string,medicineName:string,frequency:number,duration:string,medicineInfo:string){
     this.optionSelected = optionSelected;
     this.medicineName = medicineName;
     this.frequency = frequency;
     this.medicineInfo = medicineInfo;
     this.duration = duration;
 }
}






