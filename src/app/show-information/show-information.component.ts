import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-information',
  templateUrl: './show-information.component.html',
  styleUrls: ['./show-information.component.css']
})
export class ShowInformationComponent implements OnInit {
  @Input("data") data: any;
  infoList:Array<any>;
  constructor(
    private route:ActivatedRoute,
  ) { 
    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   if(params['data']){
    //       this.data = params['data'];
    //   }  
    // })
  }

  ngOnInit(): void {
    this.infoList.push(this.data);
  }
  
}
