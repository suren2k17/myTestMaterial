import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenudisplay } from './menu-display';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  displayMenu: IMenudisplay[] = [
    {
      "name": "Manage Team",
      "icon": "group_add",
      "page": "team"
    },
    {
      "name": "Manage Player",
      "icon": "person_add",
      "page": "player"
    },
    {
      "name": "Feedback",
      "icon": "chat",
      "page": "feedback"
    }
  ]
  constructor(
    private _router: Router,
    private _route: ActivatedRoute) {

  }
  viewPage(menu: IMenudisplay): void {
    console.log("event clicked : " + menu.name);
    this._router.navigateByUrl(menu.page);
  }
  returnHome(): void {
    this._router.navigateByUrl('/home');
  }
}
