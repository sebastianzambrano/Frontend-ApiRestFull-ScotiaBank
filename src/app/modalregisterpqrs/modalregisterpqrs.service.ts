import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { apiresponse } from './apiresponde';

@Injectable({
  providedIn: 'root'
})
export class ModalregisterpqrsService {

  private urlEndPoint: string = 'http://localhost:8080/v1/api/pqrs';

  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  constructor(private http: HttpClient) { }
  /*
    sendData(data: any): void {
      this.formDataSubject.next(data);
    }*/

  sendData(typePqrs: string, descriptionProblem: string, descriptionSolutionProblem: string, cedula: string, usuario: string, registroPqrs: string, horaInicio: string, horaFin: string): Observable<apiresponse> {
    
    const data = {
      typePqrs: typePqrs,
      descriptionProblem: descriptionProblem,
      descriptionSolutionProblem: descriptionSolutionProblem,
      cedula: cedula,
      usuario: usuario,
      registroPqrs: registroPqrs,
      horaInicio: horaInicio,
      horaFin: horaFin
    };

    return this.http.post<apiresponse>(this.urlEndPoint, data)
      .pipe(
        catchError(error => {
          console.error('Error al enviar datos:', error);
          throw error; // Re-emitir el error para que el componente lo maneje
        })
      );
  }

}
