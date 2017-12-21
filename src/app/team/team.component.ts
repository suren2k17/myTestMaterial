import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {
  reportsAll: Object[]  = [
    { 
      name: 'Backout', 
      method: "GET",             
      url: "https://jsonplaceholder.typicode.com/users", 
      header: {
        "api-key": "1234"
      },
      body : {
        "reportType" : "BACKOUT"
      }
    },
    { 
      name: 'Reprint', 
      method: "GET",       
      url: "https://jsonplaceholder.typicode.com/albums", 
      header: {
        "api-key": "3456"
      },
      body : {
        "reportType" : "container"
      }
    },
    {
      name: 'Diverted Container', method: "POST", 
      url: "https://jsonplaceholder.typicode.com/todos", 
      header: {},
      body: {}
    },
    {
      name: 'Docktag', method: "POST", 
      url: "https://jsonplaceholder.typicode.com/comments", 
      header: {},
      body: {}
    }     
  ];    
  
  reports = new FormControl();
  reportsList : Object[];  
  constructor() { }

  ngOnInit() {
  }
  getInputList() {
    var reportValue : Object[] = this.reports.value;      
    this.reportsList = [];
    var i = 0;
    for ( let element of Object.keys(reportValue)){      
        this.reportsList[i] =   Object.values(reportValue)[element];  
      i = i + 1;      
    }   
    console.log("Selected Values " + Object.entries(this.reportsList));    
  }

  redirect(tabChangeEvent: MatTabChangeEvent){

    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    console.log('Tab => ',tabChangeEvent.tab)
  }
}
