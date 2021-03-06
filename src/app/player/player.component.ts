import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { IPlayerInterface } from './player-interface';
import { PlayerService } from './player-service';
import { error } from 'util';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements OnInit {
  @Input() reportObj: Object = null;
  interval: NodeJS.Timer;
  pageTitle = "MANAGE PLAYERS";
  errorMessage: any;
  displayedColumns = [];  
  columnToGroup = new FormControl();

  reports = new FormControl();
  dataSource: MatTableDataSource<IPlayerInterface>;
  players: IPlayerInterface[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _playerService: PlayerService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _sanitize: DomSanitizer) {

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Input passed : " + this.reportObj);
    //console.log("inspecting object: " + Object.values(this.reportObj)[3]);
    this._playerService.getUsers(this.reportObj)      
      .subscribe(players => {
        this.players = players;
        this.dataSource = new MatTableDataSource(players);
        // Need to set sort and page criteria after above http call. No need of After View init()
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.displayedColumns = players.length > 0 ? Object.keys(this.players[0]) : [];
        console.log(" Logging Value : " + Object.keys(this.players[0]));
      },
      error => this.errorMessage = <any>error);
    this.autoReload();
    this.interval = setInterval(() => {
      this.autoReload();
    }, 50000);
  }

  autoReload(): void {
    console.log("Refreshing the service");
    //this._playerService.getUsers();
  }

  getGroupBy():void {
    console.log("value selected : " + this.columnToGroup.value);
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;    
  }

  parseReportObject(obj) {
    var reportData: any;
    if (obj.constructor.name == "Object") {
      //console.log(obj.constructor.name);
      var i = 0;
      var objects = Object.keys(obj);
      var nestedValue: string = this.parseRecursiveForObject(obj);      
      reportData = nestedValue.trim();
    }
    else {      
      reportData = obj;
    }
    return reportData;
  }

  parseRecursiveForObject(object): string {

    var returnObject: string = null;
    var i = 0;
    //recursively parsing nested objects 
    for (let element of Object.keys(object)) {
      //console.log("element type : " + object[element].constructor.name);
      if( object[element].constructor.name == "Object") {
        //console.log("Found recursiv eObject : " + element);
        returnObject = returnObject + "("+ element + ")\n";
        returnObject = returnObject + this.parseRecursiveForObject(object[element]);
        i = i + 1;
        break;
      } 
      if (i == 0) {
        returnObject = element + " : " + object[element] + "\n";
      } else {
        returnObject = returnObject + element + " : " + object[element] + "\n";
      }
      i = i + 1;
    }
    return returnObject;
  }
}
