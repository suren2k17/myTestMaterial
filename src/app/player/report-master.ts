export interface IReportMaster {
    name: string;
    method: string;       
    url:  string;
    header: Map<any, any>;
    body : Map<any,any>;
      
}

export class ReportMasterConfig implements IReportMaster {

    name: string;
    method: string;
    url: string;
    header: Map<any, any>;
    body: Map<any, any>;

    

}

