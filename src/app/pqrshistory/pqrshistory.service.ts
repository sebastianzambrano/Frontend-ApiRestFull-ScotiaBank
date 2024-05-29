import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiresponse } from './apiresponse';

@Injectable({
  providedIn: 'root'
})
export class PqrshistoryService {

  private urlEndPoint: string = 'http://localhost:8080/v1/api/pqrs/get-list-pqrs-cedula';

  constructor(private http: HttpClient) { }

  getByCedula(cedula: string): Observable<apiresponse> {
    return this.http.get<apiresponse>(`${this.urlEndPoint}/${encodeURIComponent(cedula)}`);
  }

}
