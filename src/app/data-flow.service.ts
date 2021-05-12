import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {
  medData: any = [];

  //Server is using Port 3000
  _urlFile = 'http://localhost:3000/insert';
  _urlGet = 'http://localhost:3000/retrieve';

  constructor(private _http:HttpClient) {};

  //Getter and Setter Method to share the variable between MEDICINES and DRUG-LIST components
  setMessage(data: any) {
    this.medData = data;
  }

  getMessage() {
    return this.medData;
  }


  //INSERT Method to send data to Server (NodeJS), which is responsable to connect and insert them into database
  insert(information :any){
    return this._http.post<any>(this._urlFile, information); 
  }

  //SELECT Method to get data from Server (NodeJS) 
  retrieve() {
    return this._http.get(this._urlGet);
  }

  /*
  In order to connect Angular Application to the DB I am using NodeJS with Express Framework
  */
}