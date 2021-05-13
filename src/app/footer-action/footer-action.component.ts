import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer-action',
  templateUrl: './footer-action.component.html',
  styleUrls: ['./footer-action.component.scss']
})
export class FooterActionComponent implements OnInit {
  @Input() showPreset = false;
  @Input() disablePreset = false;
  @Input() showDone = false;
  @Input() disableDone = false;
  // @Input() showSaveExit = false;
  // @Input() showExit = false;
  // @Input() showComplete = false;
  // @Input() showSkip = false;
   @Input() showBack = false;
   @Input() disableBack = false;
  // @Input() disableSaveExit = false;
  // @Input() disableExit = false;
  // @Input() disableComplete = false;

  @Output() clickPreset = new EventEmitter();
  @Output() clickDone = new EventEmitter();
  @Output() clickBack = new EventEmitter(); 
  // @Output() clickSaveExit = new EventEmitter();
  // @Output() clickExit = new EventEmitter();
  // @Output() clickComplete = new EventEmitter();
  // @Output() clickSkip = new EventEmitter();
 
  constructor() { }

  ngOnInit() { }

  handlePreset() {
      this.clickPreset.emit();
  }
  handleDone() {
    this.clickDone.emit();
}

  handleBack() {
      this.clickBack.emit();
}
  // handleSaveExit() {
  //     this.clickSaveExit.emit();
  // }
  // handleComplete() {
  //     this.clickComplete.emit();
  // }
  // handleExit() {
  //     this.clickExit.emit();
  // }
  // handleSkip() {
  //     this.clickSkip.emit();
  // }

}

