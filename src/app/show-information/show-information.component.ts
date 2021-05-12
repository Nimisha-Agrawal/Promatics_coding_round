import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-information',
  templateUrl: './show-information.component.html',
  styleUrls: ['./show-information.component.css']
})
export class ShowInformationComponent implements OnInit {
 // @Input("data") data: any;
  infoList:Array<any>;
  constructor(
    private route:ActivatedRoute,
    private data:DataService
  ) { 
    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   if(params['data']){
    //     console.log(params['data']);
    //       this.data = params['data'];
    //   }  
    // })
    this.infoList = data.getData();
  }

  ngOnInit(): void {
    //this.infoList.push(this.data);
  
  }
  
}
