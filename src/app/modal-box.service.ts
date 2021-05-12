import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalBoxService {

  medicineFormCount: number;

  setMedicineFormCount(count: number) {
    this.medicineFormCount = count;
}
  getMedicineFormCount() {
    return this.medicineFormCount;
}

  constructor() { }
}
