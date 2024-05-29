import { Injectable } from '@angular/core';
import { apiresponse } from './apiresponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private urlEndPoint: string = 'http://localhost:8080/v1/api/document/get-list-document-category';
   

  constructor(private http: HttpClient) { }

  getByCategory(category: string): Observable<apiresponse> {
    return this.http.get<apiresponse>(`${this.urlEndPoint}/${encodeURIComponent(category)}`);
  }

}
