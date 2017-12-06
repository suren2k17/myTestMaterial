import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
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
  interval: NodeJS.Timer;
  pageTitle = "MANAGE PLAYERS";
  errorMessage: any;
  displayedColumns = ['address'];
  testValues = ['List1', 'List2', 'List3'];
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

    this._playerService.getUsers()
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
    this._playerService.getUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  parseReportObject(obj){
    var reportData: any;
    if( obj.constructor.name == "Object" )
    {
      //console.log(obj.constructor.name);
      var i = 0;
      var objects = Object.keys(obj);
      var nestedValue : string = null;
      for ( let object of  Object.keys(obj))  {        

        if ( i == 0) {        
          nestedValue = object + " : " + obj[object] + "\n";    
        } else {
          nestedValue = nestedValue + object + " : " + obj[object] + "\n";        
        }
        i = i + 1;
      }
      console.log ( "Final Value after For Loop : " + nestedValue );
      //console.log("PURE Objects2 in for loop: " + Object.entries(Object.keys(obj)));        
      //reportData = Object.keys(obj).map((key)=>{ return obj[key]});
      reportData = nestedValue;
    }
    else
    {
      //console.log("Non Objects3 : " + Object.keys(obj).map((key)=>{ return obj[key]}));
      reportData = obj;
    }
    return reportData;
 }
}
