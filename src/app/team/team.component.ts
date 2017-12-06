import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {
  receivingReports = [
    {name: 'Backout Report', method: "GET", url: 2, color: 'lightblue'},
    {name: 'Reprint Report', method: "POST", url: 2, color: 'lightgreen'},
    {name: 'Docktag Report', method: "POST", url: 2, color: 'lightpink'}     
  ];
  testValues = ['Report1', 'Report2', 'Report3', 'Report4', 'Report5', 'Report6'];
  reports = new FormControl();
  reportsList : any[];
  customHeight = window.innerHeight;
  constructor() { }

  ngOnInit() {
  }
  getInputList() {
    this.reportsList = this.reports.value;
    console.log("Value coming : "+ this.reportsList );
  }
}
