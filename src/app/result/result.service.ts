import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiresponse } from './apiresponse';
import { apiresponsetime } from './apiresponsetime';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private urlEndPointDate: string = 'http://localhost:8080/v1/api/pqrs/get-list-pqrs-date';
  
  private urlEndPointTime: string = 'http://localhost:8080/v1/api/pqrs/get-list-pqrs-time';

  constructor(private http: HttpClient) { }

  getPqrsByDate(fecha: string): Observable<apiresponse> {
    return this.http.get<apiresponse>(`${this.urlEndPointDate}/${encodeURIComponent(fecha)}`);
  }

  getPqrsByTime(): Observable<apiresponsetime> {
    return this.http.get<apiresponsetime>(`${this.urlEndPointTime}`);
  } 

}