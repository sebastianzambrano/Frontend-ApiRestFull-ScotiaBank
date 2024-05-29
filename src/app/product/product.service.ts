import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiresponse } from './apiresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPoint: string = 'http://localhost:8080/v1/api/product/get-list-product-cedula';
   

  constructor(private http: HttpClient) { }

  getByCedula(cedula: string): Observable<apiresponse> {
    return this.http.get<apiresponse>(`${this.urlEndPoint}/${encodeURIComponent(cedula)}`);
  }

  


}
