import { Component } from '@angular/core';
import { ModalregisterpqrsService } from './modalregisterpqrs.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modalregisterpqrs',
  templateUrl: './modalregisterpqrs.component.html',
  styleUrl: './modalregisterpqrs.component.css'
})
export class ModalregisterpqrsComponent {

  typePqrs: string = "";
  descriptionProblem: string = "";
  descriptionSolutionProblem: string = "";
  cedula: string = "";
  usuario: string="";
  registroPqrs: string="";
  horaInicio: string="";
  horaFin: string="";

  constructor(private modalRegisterPqrs: ModalregisterpqrsService, private dialogRef: MatDialogRef<ModalregisterpqrsComponent>) { }

  submitForm(): void {

    console.log("metodo leido");
      this.modalRegisterPqrs.sendData(
      this.typePqrs,
      this.descriptionProblem,
      this.descriptionSolutionProblem,
      this.cedula,
      this.usuario,
      this.registroPqrs,
      this.horaInicio,
      this.horaFin
    ).subscribe(
      (response) => {
        // Aquí manejas la respuesta del servidor
        console.log(response); // Puedes mostrar la respuesta en la consola para verificarla
        // Aquí puedes realizar cualquier acción adicional basada en la respuesta del servidor
      },
      (error) => {
        // Aquí manejas los errores
        console.error('Error al enviar datos:', error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
      }
    );

  }

  cerrarModal(): void {
    this.dialogRef.close();
  }


  formatHora() {
    // Aplicar el formateo necesario al valor de horaInicio
    this.horaInicio = this.horaInicio + ':00'; // Agregar ':00' al final para completar el formato HH:mm:ss
    this.horaFin = this.horaFin + ':00';
    console.log('Fecha formateada:', this.horaInicio);
    console.log('Fecha formateada:', this.horaFin);
    
    // Ahora puedes enviar this.horaInicio al backend
  }




}
