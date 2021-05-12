import { Component, OnInit } from '@angular/core';
import { DataFlowService } from '../data-flow.service'; //Connection to Service component 

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {
  medData: any = {};
  res :any;

  constructor(private _medDataService: DataFlowService, private _getFromDataBase: DataFlowService) { 
  }

  /*
  When the component is loaded medColection Array is sent by medicines.component via _medDataService and stored in medData.
  */
  ngOnInit(): void {
    this.medData = this._medDataService.getMessage();
    console.log(this.medData);

    this._getFromDataBase.retrieve()
      .subscribe(data => {this.res = data;
        console.log(this.res);
      });
  }
}
