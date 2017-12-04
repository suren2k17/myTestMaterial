import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IPlayerInterface } from './player-interface';
import { PlayerService } from './player-service';
import { error } from 'util';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

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
  displayedColumns = ['id', 'name', 'email'];
  testValues = ['List1', 'List2', 'List3'];
  reports = new FormControl();
  dataSource: MatTableDataSource<IPlayerInterface>;
  players: IPlayerInterface[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _playerService: PlayerService,
    private _router: Router,
    private _route: ActivatedRoute) {

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
}
