import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];
  testValues = ['Report1', 'Report2', 'Report3'];
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
