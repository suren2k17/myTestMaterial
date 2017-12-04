import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPlayerInterface } from './player-interface';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { environment } from '../../environments/environment';



@Injectable()
export class PlayerService {
  private _userUrl = environment.reportURL;
  constructor(private _http: HttpClient) { }
  getUsers(): Observable<IPlayerInterface[]> {
    console.log("printing the URL fetched from property settings file : " + this._userUrl);
    return this._http.get<IPlayerInterface[]>(this._userUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

 
  private handleError(err: HttpErrorResponse){
    console.log('Exception: ' + err.message);
    return Observable.throw(err.message);
  }

}
