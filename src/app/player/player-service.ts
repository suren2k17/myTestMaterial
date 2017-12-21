import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPlayerInterface } from './player-interface';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { environment } from '../../environments/environment';
import { ReportMasterConfig } from './report-master';

@Injectable()
export class PlayerService {
  private _userDefaultUrl = environment.reportURL;
  private _report:ReportMasterConfig = null;
  constructor(private _http: HttpClient) { }
  getUsers(reportObj: Object): Observable<IPlayerInterface[]> {
    if ( reportObj == null ){
      this._report = <ReportMasterConfig>new Object();
      this._report.url =this._userDefaultUrl ;
    }
    else {
      this._report=<ReportMasterConfig>reportObj; 
      console.log("Printing Request Header : " + Object.entries(this._report.header));
      console.log("Printing Request Body : " + Object.entries(this._report.body));
           
    }
    console.log("printing the URL fetched from property settings file : " + this._report.url);
    return this._http.get<IPlayerInterface[]>(this._report.url)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

 
  private handleError(err: HttpErrorResponse){
    console.log('Exception: ' + err.message);
    return Observable.throw(err.message);
  }

}
